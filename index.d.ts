/**
 * Returns a wrapper function for easy overloading in JavaScript.
 * @param {{ [overload: string]: (...args: unknown[]) => unknown; }} overloads Overloads to use.
 */
declare function OverloadJS<F extends (...args: unknown[]) => unknown>(overloads: {
    [overload: string]: (...args: unknown[]) => unknown;
}): (...args: Parameters<F>) => unknown;
export default OverloadJS;
