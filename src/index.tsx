import GoogleMapReact from "google-map-react";
import { PositionMeta, PositionData, HeatmapData } from "./interfaces";

export default class GeolocationMap {
  name: string;

  icon: string;

  tooltip: string;

  usesModal: boolean;

  constructor() {
    this.name = "Geolocation Map";
    this.icon = "places";
    this.tooltip = "Plot geolocation heatmap";
    this.usesModal = true;
  }

  getData = (metadata: PositionMeta): PositionData =>
    metadata
      .filter((mitem) => mitem?.gps?.latitude && mitem?.gps?.longitude)
      .map(({ gps }) => ({
        lat: gps.latitude,
        lng: gps.longitude,
        weight: 1,
      }));

  getCenter = (positionData: PositionData): number[] => {
    function getSum(data: PositionData, key: string): number {
      return data.map((d) => d[key] as number).reduce((a, b) => a + b);
    }

    return [
      getSum(positionData, "lat") / positionData.length,
      getSum(positionData, "lng") / positionData.length,
    ];
  };

  onClick = (metadata: PositionMeta): JSX.Element | null => {
    if (!metadata) return null;

    const defaultZoom = 1;

    const positionData: PositionData = this.getData(metadata);

    const heatmapCenter = this.getCenter(positionData);

    const heatmapData: HeatmapData = {
      positions: positionData,
      options: {
        radius: 20,
        opacity: 1,
      },
    };

    return positionData.length > 0 ? (
      <GoogleMapReact
        defaultZoom={defaultZoom}
        defaultCenter={heatmapCenter}
        heatmap={heatmapData}
        bootstrapURLKeys={{
          key: import.meta.env.VITE_GMAPS_API_KEY,
          libraries: ["places", "visualization"],
        }}
      />
    ) : null;
  };
}
