
const baseUrl = './photo-sphere-viewer/assets/';

document.querySelector('#startvt').addEventListener('click', () => {
    document.querySelector('#startvt').style.display = 'none';
    document.querySelector('.viewerContainer').style.filter = 'none';
    document.querySelector('.viewerContainer').style.background = 'transparent';
    document.querySelector('#viewer').style.pointerEvents = 'all';
})

const viewer = new PhotoSphereViewer.Viewer({
    container: 'viewer',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    navbar: 'zoom move gallery fullscreen',

    plugins: [
        PhotoSphereViewer.MarkersPlugin,
        [PhotoSphereViewer.GalleryPlugin, {
            thumbnailSize: { width: 100, height: 100 },
        }],
        [PhotoSphereViewer.VirtualTourPlugin, {
            positionMode: 'gps',
            renderMode: '3d',
        }],
    ],
});

const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

virtualTour.setNodes([
    {
        id: '1',
        panorama: './img/1.jpg',
        thumbnail: './img/1.jpg',
        name: 'Первый интерьер',
        links: [
            { nodeId: '6', gps: [-200, 20] },
            { nodeId: '2', gps: [40, 20] }
        ],
        gps: [-110, -40],
    },
    {
        id: '2',
        panorama: './img/2.jpg',
        thumbnail: './img/2.jpg',
        name: 'Второй интерьер',
        links: [
          { nodeId: '1', gps: [110, 0] },
          { nodeId: '3', gps: [-75, 20] }
        ],
        gps: [110, 20]
    },
    {
      id: '3',
      panorama: './img/3.jpg',
      thumbnail: './img/3.jpg',
      name: 'Третий интерьер',
      links: [
        { nodeId: '2', gps: [-80, 0] },
        { nodeId: '4', gps: [100, 20] }
      ],
      gps: [-80.156168, 25.666623],
  },
  {
    id: '4',
    panorama: './img/4.jpg',
    thumbnail: './img/4.jpg',
    name: 'Четвертый интерьер',
    links: [
      { nodeId: '3', gps: [-80, 0] },
      { nodeId: '5', gps: [95, 20] }
    ],
    gps: [-80.156168, 25.666623],
  },
  {
    id: '5',
    panorama: './img/5.jpg',
    thumbnail: './img/5.jpg',
    name: 'Пятый интерьер',
    links: [
      { nodeId: '4', gps: [-80, 0] },
      { nodeId: '6', gps: [95, 20] }
    ],
    gps: [-80.156168, 25.666623],
  },
  {
    id: '6',
    panorama: './img/6.jpg',
    thumbnail: './img/6.jpg',
    name: 'Шестой интерьер',
    links: [
      { nodeId: '5', gps: [-80, 0] },
      { nodeId: '1', gps: [95, 20] }
    ],
    gps: [-80.156168, 25.666623],
  }
], '1');