/** Unknown access requirements must never be presented as no sign-in. */
export function signInLabel(required: boolean | null): string {
  return required === null ? "not verified" : required ? "required" : "not required";
}
