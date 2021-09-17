/// <reference types="react" />
import { PositionMeta, PositionData } from "./interfaces";
export default class GeolocationMap {
    name: string;
    icon: string;
    tooltip: string;
    usesModal: boolean;
    constructor();
    getData: (metadata: PositionMeta) => PositionData;
    getCenter: (positionData: PositionData) => number[];
    onClick: (metadata: PositionMeta) => JSX.Element | null;
}
