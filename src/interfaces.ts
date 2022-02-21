type PositionData = { lat: number; lng: number; weight: number }[];

type PositionMeta = { latitude: number; longitude: number }[];
interface HeatmapData {
  positions: {
    lat: number;
    lng: number;
    weight?: number;
  }[];
  options: {
    radius?: number;
    opacity?: number;
  };
}

interface PluginDataIn {
  metadata: PositionMeta;
}

interface PluginDataOut {
  domElement: JSX.Element | null;
  message?: string | null;
}

export type {
  PositionData,
  PositionMeta,
  HeatmapData,
  PluginDataIn,
  PluginDataOut,
};
