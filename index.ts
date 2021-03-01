interface Overload {
    signature: string;
    types: {
        [key: string]: "string" | "number" | "boolean" | "object";
    };
}

interface Options {
    nullOrUndefined?: boolean;
}


export default function OverloadJS(overloads: Overload[], options?: Options) {
    
}
