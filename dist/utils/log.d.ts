declare const deprecate: ({ oldMethod, newMethod }: {
    oldMethod: string;
    newMethod: string;
}) => void;

export { deprecate };
