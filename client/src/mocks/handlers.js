import { rest } from "msw";

const handlers = [
  rest.get("http://localhost:3001/products/MLA14186171", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      ctx.json({
        name: "Samsung Galaxy S10 512 GB azul prisma 8 GB RAM",
        attributes: [
          {
            id: "BRAND",
            name: "Marca",
            value_id: "206",
            value_name: "Samsung",
            values: [
              {
                id: "206",
                name: "Samsung",
              },
            ],
          },
          {
            id: "LINE",
            name: "Línea",
            value_id: "249991",
            value_name: "Galaxy S",
            values: [
              {
                id: "249991",
                name: "Galaxy S",
              },
            ],
          },
          {
            id: "MODEL",
            name: "Modelo",
            value_id: "7227",
            value_name: "S10",
            values: [
              {
                id: "7227",
                name: "S10",
              },
            ],
          },
          {
            id: "IS_DUAL_SIM",
            name: "Es Dual SIM",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "COLOR",
            name: "Color",
            value_id: "6807999",
            value_name: "Azul prisma",
            values: [
              {
                id: "6807999",
                name: "Azul prisma",
              },
            ],
          },
          {
            id: "INTERNAL_MEMORY",
            name: "Memoria interna",
            value_id: "5414081",
            value_name: "512 GB",
            values: [
              {
                id: "5414081",
                name: "512 GB",
              },
            ],
          },
          {
            id: "RAM",
            name: "Memoria RAM",
            value_id: "579564",
            value_name: "8 GB",
            values: [
              {
                id: "579564",
                name: "8 GB",
              },
            ],
          },
          {
            id: "MAIN_COLOR",
            name: "Color principal",
            value_id: "2450293",
            value_name: "Azul",
            values: [
              {
                id: "2450293",
                name: "Azul",
                meta: {
                  rgb: "1717FF",
                },
              },
            ],
            meta: {
              rgb: "1717FF",
            },
          },
          {
            id: "OPERATING_SYSTEM_NAME",
            name: "Nombre del sistema operativo",
            value_id: "7403813",
            value_name: "Android",
            values: [
              {
                id: "7403813",
                name: "Android",
              },
            ],
          },
          {
            id: "OPERATING_SYSTEM_ORIGINAL_VERSION",
            name: "Versión original del sistema operativo",
            value_id: "7207107",
            value_name: "9.0 Pie",
            values: [
              {
                id: "7207107",
                name: "9.0 Pie",
              },
            ],
          },
          {
            id: "DISPLAY_SIZE",
            name: "Tamaño de la pantalla",
            value_id: "6892143",
            value_name: '6.1 "',
            values: [
              {
                id: "6892143",
                name: '6.1 "',
              },
            ],
          },
          {
            id: "DISPLAY_RESOLUTION",
            name: "Resolución de la pantalla",
            value_id: "7222494",
            value_name: "1440 px x 3040 px",
            values: [
              {
                id: "7222494",
                name: "1440 px x 3040 px",
              },
            ],
          },
          {
            id: "MAIN_REAR_CAMERA_RESOLUTION",
            name: "Resolución de la cámara trasera principal",
            value_id: "7207095",
            value_name: "16 Mpx",
            values: [
              {
                id: "7207095",
                name: "16 Mpx",
              },
            ],
          },
          {
            id: "REAR_CAMERA_RECORDING_RESOLUTION",
            name: "Resolución de video de la cámara trasera",
            value_id: "7199630",
            value_name: "3840 px x 2160 px",
            values: [
              {
                id: "7199630",
                name: "3840 px x 2160 px",
              },
            ],
          },
          {
            id: "MAIN_FRONT_CAMERA_RESOLUTION",
            name: "Resolución de la cámara frontal principal",
            value_id: "7222497",
            value_name: "10 Mpx",
            values: [
              {
                id: "7222497",
                name: "10 Mpx",
              },
            ],
          },
          {
            id: "BATTERY_CAPACITY",
            name: "Capacidad de la batería",
            value_id: "2729224",
            value_name: "3400 mAh",
            values: [
              {
                id: "2729224",
                name: "3400 mAh",
              },
            ],
          },
          {
            id: "WITH_FINGERPRINT_READER",
            name: "Con lector de huella digital",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_FACIAL_RECOGNITION",
            name: "Con reconocimiento facial",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "NUMBER_OF_SIM_CARD_SLOTS",
            name: "Cantidad de ranuras para tarjeta SIM",
            value_id: "2087812",
            value_name: "1",
            values: [
              {
                id: "2087812",
                name: "1",
              },
            ],
          },
          {
            id: "SIM_SIZES",
            name: "Tamaños de tarjeta SIM compatibles",
            value_id: "80453",
            value_name: "Nano-SIM",
            values: [
              {
                id: "80453",
                name: "Nano-SIM",
              },
            ],
          },
          {
            id: "WITH_ESIM",
            name: "Con eSIM",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "OPERATING_SYSTEM_PERSONALIZATION_ORIGINAL_SHELL",
            name: "Capa original de personalización del sistema operativo",
            value_id: "7439957",
            value_name: "One UI",
            values: [
              {
                id: "7439957",
                name: "One UI",
              },
            ],
          },
          {
            id: "RELEASE_YEAR",
            name: "Año de lanzamiento",
            value_id: "5057727",
            value_name: "2019",
            values: [
              {
                id: "5057727",
                name: "2019",
              },
            ],
          },
          {
            id: "WEIGHT",
            name: "Peso",
            value_id: "2087839",
            value_name: "157 g",
            values: [
              {
                id: "2087839",
                name: "157 g",
              },
            ],
          },
          {
            id: "HEIGHT",
            name: "Altura",
            value_id: "6886135",
            value_name: "149.9 mm",
            values: [
              {
                id: "6886135",
                name: "149.9 mm",
              },
            ],
          },
          {
            id: "WIDTH",
            name: "Ancho",
            value_id: "7453384",
            value_name: "70.4 mm",
            values: [
              {
                id: "7453384",
                name: "70.4 mm",
              },
            ],
          },
          {
            id: "DEPTH",
            name: "Profundidad",
            value_id: "6850489",
            value_name: "7.8 mm",
            values: [
              {
                id: "6850489",
                name: "7.8 mm",
              },
            ],
          },
          {
            id: "DISPLAY_TECHNOLOGY",
            name: "Tecnología de la pantalla",
            value_id: "7453381",
            value_name: "Dynamic AMOLED",
            values: [
              {
                id: "7453381",
                name: "Dynamic AMOLED",
              },
            ],
          },
          {
            id: "DISPLAY_PIXELS_PER_INCH",
            name: "Píxeles por pulgada",
            value_id: "7453385",
            value_name: "550 ppi",
            values: [
              {
                id: "7453385",
                name: "550 ppi",
              },
            ],
          },
          {
            id: "WITH_TOUCHSCREEN_DISPLAY",
            name: "Con pantalla táctil",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_PHYSICAL_QWERTY_KEYBOARD",
            name: "Con teclado QWERTY físico",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "WITH_CAMERA",
            name: "Con cámara",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "REAR_CAMERAS_NUMBER",
            name: "Cantidad de cámaras traseras",
            value_id: "7505949",
            value_name: "3",
            values: [
              {
                id: "7505949",
                name: "3",
              },
            ],
          },
          {
            id: "REAR_CAMERAS_RESOLUTION",
            name: "Resolución de las cámaras traseras",
            value_id: "7453383",
            value_name: "16 Mpx/12.2 Mpx/12 Mpx",
            values: [
              {
                id: "7453383",
                name: "16 Mpx/12.2 Mpx/12 Mpx",
              },
            ],
          },
          {
            id: "REAR_CAMERA_APERTURE",
            name: "Apertura del diafragma de la cámara trasera",
            value_id: "7453382",
            value_name: "f 2.2/f 1.5/f 2.4",
            values: [
              {
                id: "7453382",
                name: "f 2.2/f 1.5/f 2.4",
              },
            ],
          },
          {
            id: "FRONT_CAMERAS_NUMBER",
            name: "Cantidad de cámaras frontales",
            value_id: "7477216",
            value_name: "1",
            values: [
              {
                id: "7477216",
                name: "1",
              },
            ],
          },
          {
            id: "FRONT_CAMERA_RECORDING_RESOLUTION",
            name: "Resolución de video de la cámara frontal",
            value_id: "7207112",
            value_name: "3840 px x 2160 px",
            values: [
              {
                id: "7207112",
                name: "3840 px x 2160 px",
              },
            ],
          },
          {
            id: "FRONT_CAMERA_APERTURE",
            name: "Apertura del diafragma de la cámara frontal",
            value_id: "7439050",
            value_name: "f 1.9",
            values: [
              {
                id: "7439050",
                name: "f 1.9",
              },
            ],
          },
          {
            id: "WITH_FRONT_CAMERA_FLASH",
            name: "Con flash en la cámara frontal",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "OPTICAL_ZOOM",
            name: "Zoom óptico",
            value_id: "1344",
            value_name: "2x",
            values: [
              {
                id: "1344",
                name: "2x",
              },
            ],
          },
          {
            id: "MOBILE_NETWORK",
            name: "Red",
            value_id: "367876",
            value_name: "4G/LTE",
            values: [
              {
                id: "367876",
                name: "4G/LTE",
              },
            ],
          },
          {
            id: "MEMORY_CARD_TYPES",
            name: "Tipos de tarjeta de memoria",
            value_id: "7199655",
            value_name: "MicroSD",
            values: [
              {
                id: "7199655",
                name: "MicroSD",
              },
            ],
          },
          {
            id: "MAX_MEMORY_CARD_CAPACITY",
            name: "Capacidad máxima de la tarjeta de memoria",
            value_id: "6901713",
            value_name: "512 GB",
            values: [
              {
                id: "6901713",
                name: "512 GB",
              },
            ],
          },
          {
            id: "PROCESSOR_CORES_NUMBER",
            name: "Cantidad de núcleos del procesador",
            value_id: "7206961",
            value_name: "8",
            values: [
              {
                id: "7206961",
                name: "8",
              },
            ],
          },
          {
            id: "WITH_USB_CONNECTOR",
            name: "Con conector USB",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_WIFI",
            name: "Con Wi-Fi",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_GPS",
            name: "Con GPS",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_BLUETOOTH",
            name: "Con Bluetooth",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_MINI_HDMI",
            name: "Con mini HDMI",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "WITH_RADIO",
            name: "Con radio",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "WITH_TV_TUNER",
            name: "Con sintonizador de TV",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "WITH_ACCELEROMETER",
            name: "Con acelerómetro",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_PROXIMITY_SENSOR",
            name: "Con sensor de proximidad",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "WITH_GYROSCOPE",
            name: "Con giroscopio",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "IS_SPLASH_RESISTANT",
            name: "Es resistente a salpicaduras",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "IS_WATER_RESISTANT",
            name: "Es resistente al agua",
            value_id: "242085",
            value_name: "Sí",
            values: [
              {
                id: "242085",
                name: "Sí",
                meta: {
                  value: true,
                },
              },
            ],
            meta: {
              value: true,
            },
          },
          {
            id: "IS_WATERPROOF",
            name: "Es a prueba de agua",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
          {
            id: "BATTERY_TYPE",
            name: "Tipo de batería",
            value_id: "95013",
            value_name: "Ion de litio",
            values: [
              {
                id: "95013",
                name: "Ion de litio",
              },
            ],
          },
          {
            id: "WITH_REMOVABLE_BATTERY",
            name: "Con batería removible",
            value_id: "242084",
            value_name: "No",
            values: [
              {
                id: "242084",
                name: "No",
                meta: {
                  value: false,
                },
              },
            ],
            meta: {
              value: false,
            },
          },
        ],
        pictures: [
          {
            id: "898417-MLA31578002324_072019",
            url:
              "https://mla-s2-p.mlstatic.com/898417-MLA31578002324_072019-F.jpg",
            suggested_for_picker: [],
            max_width: 597,
            max_height: 1200,
          },
          {
            id: "819190-MLA31577782963_072019",
            url:
              "https://mla-s2-p.mlstatic.com/819190-MLA31577782963_072019-F.jpg",
            suggested_for_picker: ["COLOR"],
            max_width: 596,
            max_height: 1200,
          },
          {
            id: "805557-MLA31577782965_072019",
            url:
              "https://mla-s2-p.mlstatic.com/805557-MLA31577782965_072019-F.jpg",
            suggested_for_picker: [],
            max_width: 553,
            max_height: 1200,
          },
          {
            id: "606209-MLA31577782968_072019",
            url:
              "https://mla-s2-p.mlstatic.com/606209-MLA31577782968_072019-F.jpg",
            suggested_for_picker: [],
            max_width: 578,
            max_height: 1200,
          },
          {
            id: "864702-MLA31578503519_072019",
            url:
              "https://mla-s2-p.mlstatic.com/864702-MLA31578503519_072019-F.jpg",
            suggested_for_picker: [],
            max_width: 586,
            max_height: 1200,
          },
        ],
        id: "MLA14186171",
      })
    );
  }),
];

export { handlers, rest };
