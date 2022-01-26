<template>
    <div ref="mapRef" id="map"></div>
</template>

<script setup lang="ts">
import { ref, unref, onMounted } from 'vue'
import L, { LatLngLiteral } from 'leaflet'
import 'leaflet-draw'

import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'

const mapRef = ref()
const url = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbj-yuantu.fotomore.com%2Fcreative%2Fvcg%2Fnew%2FVCG211363439424.jpg%3FExpires%3D1643621485%26OSSAccessKeyId%3DLTAI2pb9T0vkLPEC%26Signature%3DV7ZL3VtfrWsfGDmJDiahAW3pOgo%253D%26x-oss-process%3Dimage%252Fauto-orient%252C0%252Fsaveexif%252C1%252Fresize%252Cm_lfit%252Ch_1200%252Cw_1200%252Climit_1%252Fsharpen%252C100%252Fquality%252CQ_80%252Fwatermark%252Cg_se%252Cx_0%252Cy_0%252Cimage_d2F0ZXIvdmNnLXdhdGVyLTIwMDAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLG1fbGZpdCxoXzE3MSx3XzE3MSxsaW1pdF8x%252F&refer=http%3A%2F%2Fbj-yuantu.fotomore.com&app=2002&size=f10000,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645767001&t=64dbdc0778e08bc891f43dffe7c1ddc6'
onMounted(() => {
    console.log();
    var map = L.map(
        unref(mapRef),
        {
            crs: L.CRS.Simple,
            minZoom: 0,
            maxZoom: 16,
            zoom: 10,
            zoomSnap: 0,
            zoomControl: false,
            attributionControl: false,
            center: [0, 0],
        }
    )
    L.imageOverlay(url, [[0,0],[500, 500]]).addTo(map)
    let editableLayers = new L.FeatureGroup();
    let options: L.Control.DrawConstructorOptions = {
        position: "topright" as L.ControlPosition,
        draw: {
          polyline: {
            shapeOptions: {
              color: "red",
              weight: 5,
              opacity: 0.5,
            },
            maxPoints: 2,
            showLength: true,
            metric: true,
          },
          polygon: {
            allowIntersection: false, // Restricts shapes to simple polygons
            drawError: {
              color: "#e1e100", // Color the shape will turn when intersects
              // message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
            },
            shapeOptions: {
              color: "#bada55",
            },
          },
          circle: false, // Turns off this drawing tool
          rectangle: {
            shapeOptions: {
              clickable: false,
            } as L.PolylineOptions,
          },
          circlemarker: false,
          marker: false,
        },
        edit: {
          featureGroup: editableLayers,
        },
    };
    
    const drawControl = new L.Control.Draw(options)
    map.addControl(drawControl);

    map.on("draw:created", (e: any) => {
        editableLayers.addLayer(e.layer);
        if (e.layerType === "polyline" && map) {
          let start: L.LatLng = e.layer._latlngs[0];
          let end: L.LatLng = e.layer._latlngs[1];

          let lat = (start.lat + end.lat) / 2;
          let lng = (start.lng + end.lng) / 2;
          let d = Math.sqrt(
            Math.pow(start.lat - end.lat, 2) + Math.pow(start.lng - end.lng, 2)
          );
          L.popup({
            autoClose: false,
            keepInView: true,
            autoPan: true,
          })
            .setLatLng([lat, lng])
            .setContent(`<p>${(d * 1000).toFixed(3)} μm</p>`)
            .addTo(map);
        }
    });
})



</script>

<style>
#map { height: 500px; }
</style>