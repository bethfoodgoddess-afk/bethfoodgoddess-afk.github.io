
export function truncate(str: string | undefined, maxLength: number, indicator: string = '...'): string {
    if (maxLength <= 0 || (str?.length || 0) < maxLength) {
        return str || "";
    }

    const truncLen = maxLength - indicator.length > 0 ? maxLength - indicator.length : 0;
    // TBD:
    // Why TS thinks that str can be undefined?
    return (str || "").slice(0, truncLen) + indicator;
}

