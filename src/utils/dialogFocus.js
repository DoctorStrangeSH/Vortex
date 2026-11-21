const FOCUSABLE_SELECTOR = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

export function trapDialogTab(event, dialog) {
    if (event.key !== 'Tab' || !dialog) return false;

    const focusable = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)]
        .filter(element => element.getAttribute('aria-hidden') !== 'true');
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
