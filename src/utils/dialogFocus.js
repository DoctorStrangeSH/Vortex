const FOCUSABLE_SELECTOR = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

function isAvailableFocusTarget(element) {
    if (element.hidden || element.closest?.('[hidden], [inert], [aria-hidden="true"]')) return false;

    // Unit-test doubles may not implement layout APIs. Real browser elements do.
    if (typeof element.getClientRects === 'function' && element.getClientRects().length === 0) return false;

    const view = element.ownerDocument?.defaultView;
    const style = view?.getComputedStyle?.(element);
    return !style || (style.display !== 'none' && style.visibility !== 'hidden' && style.visibility !== 'collapse');
}

export function trapDialogTab(event, dialog) {
    if (event.key !== 'Tab' || !dialog) return false;

    const focusable = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)]
        .filter(isAvailableFocusTarget);
    const activeElement = dialog.ownerDocument?.activeElement;

    if (!focusable.length) {
        event.preventDefault();
        dialog.focus();
        return true;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (activeElement === first || !dialog.contains(activeElement))) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && (activeElement === last || !dialog.contains(activeElement))) {
        event.preventDefault();
        first.focus();
    }
    return true;
}
