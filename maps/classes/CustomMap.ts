/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // we are keeping this private so devs cannot call
  // unvetted methods, we only want to expose tested calls
  // to the map
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    const htmlMap: Element = document.querySelector(`#${elementId}`) as Element;

    // @ts-ignore
    this.googleMap = new google.maps.Map(htmlMap, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
