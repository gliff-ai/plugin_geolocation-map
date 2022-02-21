import GoogleMapReact from "google-map-react";
import {
  PositionMeta,
  PositionData,
  HeatmapData,
  PluginDataIn,
  PluginDataOut,
} from "./interfaces";

export default class GeolocationMap {
  name: string;

  icon: string;

  tooltip: string;

  constructor() {
    this.name = "Geolocation Map";
    this.icon = "places";
    this.tooltip = "Plot geolocation heatmap";
  }

  private getData = (metadata: PositionMeta): PositionData =>
    metadata
      .filter((mitem) => mitem?.latitude && mitem?.longitude)
      .map(({ latitude, longitude }) => ({
        lat: latitude,
        lng: longitude,
        weight: 1,
      }));

  private getCenter = (positionData: PositionData): number[] => {
    function getSum(data: PositionData, key: string): number {
      return data.map((d) => d[key] as number).reduce((a, b) => a + b);
    }

    return [
      getSum(positionData, "lat") / positionData.length,
      getSum(positionData, "lng") / positionData.length,
    ];
  };

  private isEmpty = (metadata: PositionMeta): boolean => {
    const result = metadata.filter(
      (mitem) => "latitude" in mitem && "longitude" in mitem
    );
    return result.length === 0;
  };

  onClick = (data: PluginDataIn): PluginDataOut => {
    if (!!data?.metadata && !this.isEmpty(data?.metadata)) {
      const defaultZoom = 1;

      const positionData: PositionData = this.getData(data?.metadata);

      const heatmapCenter = this.getCenter(positionData);

      const heatmapData: HeatmapData = {
        positions: positionData,
        options: {
          radius: 20,
          opacity: 1,
        },
      };

      if (positionData.length > 0) {
        return {
          domElement: (
            <GoogleMapReact
              defaultZoom={defaultZoom}
              defaultCenter={heatmapCenter}
              heatmap={heatmapData}
              bootstrapURLKeys={{
                key: import.meta.env.VITE_GMAPS_API_KEY,
                libraries: ["places", "visualization"],
              }}
            />
          ),
        };
      }
    }

    return {
      domElement: null,
      message: "The metadata does not contain geolocation data.",
    };
  };
}
