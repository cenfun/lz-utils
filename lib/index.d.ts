declare namespace LZ {
    function compress(input: string): string;
    function decompress(input: string): string;

    function deflateSync(input: string): string;
    function deflate(input: string): Promise<string>;

    function inflateSync(input: string): string;
    function inflate(input: string): Promise<string>;
}

export = LZ