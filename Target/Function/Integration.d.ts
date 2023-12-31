/**
 * @module Integration
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Integration.js";
export declare const Default: Omit<{} & {
    Pipe: {};
    default: {
        Cache: {
            Search: string;
            Folder: string;
        };
        Path: string;
        Logger: 2;
        Action: {
            Read: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
            Wrote: ({ Buffer }: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Type/Buffer.js").Type>;
            Passed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<true>;
            Failed: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
            Accomplished: ({ Input, Output }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
            Fulfilled: ({ Files }: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
            Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<import("files-pipe/Target/Interface/Plan.js").default>;
        };
        Files: string;
        Exclude: false;
    };
}, "__proto__">;
export declare const Merge: import("typescript-esbuild/Target/Interface/Merge.js").default<import("typescript-esbuild/Target/Interface/Merge.js").Generic>;
