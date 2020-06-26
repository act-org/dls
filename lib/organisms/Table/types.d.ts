/**
 * @prettier
 */
/// <reference types="react" />
export interface Thing {
    createdAt: Date;
    id: number;
    name: string;
}
export interface ThingExtended extends Thing {
    actions: React.ReactElement<any>;
}
//# sourceMappingURL=types.d.ts.map