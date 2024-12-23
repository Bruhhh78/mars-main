const products = [
    {
        id: 1,
        name: "ClearVue 650 Ultrasound System", 
        image: 'Ultrasound/clearvue-650-ultrasound-system-125x125.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Monitor Size": "54.6cm",
            "Degree Of Movement": 180,
            "Height Adjusted Monitor": "Yes"
        }
    },
    {
        id: 2,
        name: "ClearVue 350 Ultrasound System",
        image: 'Ultrasound/clearvue-350-ultrasound-machine-125x125.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "3D/4D",
            "Monitor Size": "54.6cm",
            "Degree Of Movement": 180,
            "Gel Warmer": "Yes"
        }
    },
    {
        id: 3,
        name: "EPIQ CVxi Ultrasound Machine",
        image: 'Ultrasound/epiq-cvxi-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Monitor Size": "54.6cm",
            "Height Adjusted Monitor": "Yes",
            "Gel Warmer": "Yes"
        }
    },
    {
        id: 4,
        name: "Phillips CX 50",
        image: 'Ultrasound/philipscx50.webp',
        category: "Ultrasound Machine",
        specs: {
            FreqRange: "50/60Hz",
            Weight: "7.3kg",
            Height: "86mm",
            Width: "413mm"
        }
    },
    {
        id: 5,
        name: "EPIQ CVX Ultrasound",
        image: 'Ultrasound/epiq-cvx-ultrasound-500x500.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Monitor Size": "54.6cm",
            "Degree Of Movement": 180,
            Weight: "104.3kg"
        }
    },
    {
        id: 6,
        name: "ClearVue 850 Ultrasound System",
        image: 'Ultrasound/clearvue-850-ultrasound-machine-500x500.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Monitor Size": "54.6cm",
            "Degree Of Movement": 180,
            "Height Adjusted Monitor": "Yes"
        }
    },
    {
        id: 7,
        name: "Affiniti 30 - DS Ultrasound",
        image: 'Ultrasound/affiniti-30-ds-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Monitor Size": "54.6cm",
            "Degree Of Movement": 180,
            "Height Adjusted Monitor": "Yes"
        }
    },
    {
        id: 8,
        name: "Philips Ultrasound Machine",
        image: 'Ultrasound/philipscx50.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            Width: "60.6cm",
            Depth: "109.3 cm",
            Height: "171cm"
        }
    },
    {
        id: 9,
        name: "Philips Ultrasound Machine",
        image: 'Ultrasound/philipscx50.webp',
        category: "Ultrasound Machine",
        specs: {
            "Monitor Size": "54.6cm",
            "Imaging Mode": "2D",
            Width: "60.6cm",
            Depth: "109.3 cm",
            Height: "171cm"
        }
    },
    {
        id: 10,
        name: "PHILIPS PALM SIZE ULTRASOUND ON YOUR ANDROID DEVICE LUMIFY",
        image: 'Ultrasound/philips-palm-size-ultrasound-on-your-android-device-lumify-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Machine Condition": "New",
            "Clinical Application": "OB/ GYN, Cardiac Imaging, VASCULAR, General Imaging",
            "Connectivity Ports": 1

        }
    },
    {
        id: 11,
        name: "EPIQ 7 Ultrasound System For Vascular",
        image: 'Ultrasound/epiq-7-ultrasound-system-for-vascular-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            Width: "60.6cm",
            Depth: "109.2 cm",
            Weight: "104.3kg"
        }
    },
    {
        id: 12,
        name: "EPIQ 5 Ultrasound vascular",
        image: 'Ultrasound/philipscx50.webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Machine Condition": "New",
            "Monitor Size": "54.6cm",
            Depth: "109.3 cm",
            Height: "171cm"
        }
    },
    {
        id: 13,
        name: "ClearVue 550 Ultrasound system",
        image: 'Ultrasound/clearvue-550-ultrasound-system-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Machine Condition": "New",
            "Monitor Size": "54.6 cm",
            "Degree of Movement": 180,
            "Height Adjustable Monitor": "Yes"
        }
    },
    {
        id: 14,
        name: "EPIQ 7 Philips Ultrasound Machine",
        image: 'Ultrasound/epiq-7-philips.webp',
        category: "Ultrasound Machine",
        specs: {
            "Width": "60.6 cm",
            "Depth": "109.2 cm",
            "Height": "171.5 cm",
            "Weight": "104.3 kg"
        }
    },
    {
        id: 15,
        name: "Affiniti 30 Ultrasound System",
        image: 'Ultrasound/philips-us-3300-ultrasound-machine-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Monitor Size": "54.6 cm",
            "Weight": "83.6 kg",
            "Degree of Movement": 180,
            "Height Adjustable Monitor": "Yes"
        }
    },
    {
        id: 16,
        name: "Affiniti 30 - DS Ultrasound",
        image: 'Ultrasound/affiniti-30-ds-250x250 (1).webp',
        category: "Ultrasound Machine",
        specs: {
            "Imaging Mode": "2D",
            "Monitor Size": "54.6cm",
            "Degree of Movement": "180",
            "Height Adjustable Monitor": "Yes"
        }
    },
    {
        id: 17,
        name: "EPIQ 5 Ultrasound Radiology",
        image: 'Ultrasound/epiq-5-ultrasound.webp',
        category: "Ultrasound Machine",
        specs: {

            "Monitor Size": "54.6 cm",
            "Degree of Movement": "180",
            "Height Adjustable Monitor": "Yes",
            "Gel Warmer": "Yes"
        }
    },
    {
        id: 18,
        name: "EPIQ 5 Ultrasound Obstetrics And Gynecology",
        image: 'Ultrasound/untitled-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Monitor Size": "54.6 cm",
            "Degree of Movement": "180",
            "Height Adjustable Monitor": "Yes",
            "Gel Warmer": "Yes"
        }
    },
    {
        id: 19,
        name: "Innosight Portable USG",
        image: 'Ultrasound/innsoight-portable-usg-250x250.webp',
        category: "Ultrasound Machine",
        specs: {
            "Machine Condition": "New",
            "Usage/Application": "Hospital",
            "Imaging Mode": "3D/4D",
            "Brand": "Philips"
        }
    },
    {
        id: 20,
        name: "Philips CT Scanner",
        image: 'CT-Scan/ct-1.webp',
        category: "CT-Scan Machine",
        specs: {
            "Tube Type": "vMRC tube",
            "kVp Settings": "140 kV",
            "Generator Power": "80 kW",
            "Tube Capacity": "8 MHU"
        }
    },
    {
        id: 21,
        name: "Ingenuity Core Ct Scanner",
        image: 'CT-Scan/ct-2.webp',
        category: "CT-Scan Machine",
        specs: {
            "Model Name/Number": "Multislice CT Scan 128 SLICE",
            "Brand/Manufactures": "Philips",
            "Factory Of Orgin": "Philips Heal Thcare",
            "Anode Cooling Rate": "1,608KHU/min"
        }
    },
    {
        id: 22,
        name: "Ingenuity Flex CT scanner",
        image: 'CT-Scan/ct-3.webp',
        category: "CT-Scan Machine",
        specs: {
            "Brand": "Philips",
            "Usage/Application": "City Scan",
            "mA Range": "665 mA",
            "KV selections": "140kV"
        }
    },
    {
        id: 23,
        name: "CT 5000 Ingenuity",
        image: 'CT-Scan/ct-5000-ingenuity-250x250.webp',
        category: "CT-Scan Machine",
        specs: {
            "Machine Condition": "New",
            "Name Of Products": "Multislice CT Scan 128 SLICE",
            "Brand/Manufactures": "Philips",
            "Model/Type: Ingenuity": "Core 128"
        }
    },
    {
        id: 24,
        name: "Svity Scan CT 6000 ICT",
        image: 'CT-Scan/ct-4.webp',
        category: "CT-Scan Machine",
        specs: {
            "Gantry Aperture": "700 mm",
            "Focus-isocenter distance": "570 mm",
            "Focus-detector distance": "1040mm",
            "Patient Supports": "Standard Bariatric",
        }
    },
    {
        id: 25,
        name: "Mobile Diagnost WDR",
        image: 'X-Ray/mobilediagnost-wdr-250x250.webp',
        category: "X-Ray",
        specs: {
            "Operating System": "Linux RHEL 8.3",
            "CPU": "8 cores, 3.9 GHz",
            "Height": "386 mm",
            "Width": "169 mm"
        }
    },
    {
        id: 26,
        name: "Proxi Diagnost N90",
        image: 'X-Ray/untitled-250x250.webp',
        category: "X-Ray",
        specs: {
            "Brand": "Philips",
            "Machine Type": "Portable (Mobile)",
            "Detector Size": "35 cm x 43 cm",
            "Image Matrix Size": "2330 pixel x 2846 pixel"
        }
    },
    {
        id: 27,
        name: "Everflo Home Oxygen System",
        image: 'OxygenConc/o2-1.webp',
        category: "Oxygen Concentrator",
        specs: {
            "Sound Level": "45 (typical) dB",
            "Input Voltage": "120 +/- 10% VAC",
            "Input Frequency": "60 Hz",
            "Dimensions": "58.4 cm H x 38.1 cm W x 24.1 cm D"
        }
    },
    {
        id: 28,
        name: "SimplyGo Mini Portable Oxygen Concentrator",
        image: 'OxygenConc/o2-2.webp',
        category: "Oxygen Concentrator",
        specs: {
            "Oxygen Concentration": "87 to 96% at All Settings",
            "Size": "9.4 x 8.3 x 3.6 Inches",
            "Control Panel Type": "Color Touch Screen LCD",
            "Pulse Dose Flow Settings": "1 to 5"
        }
    },
    {
        id: 29,
        name: "Digital Diagnost C90",
        image: 'Diagnostic/1.webp',
        category: "Diagnostic Machine",
        specs: {
            "Maximum Voltage": "150 kV",
            "Focal Spot 0.6 mm": "Maximum Power 33 kW",
            "Focal Spot 1.2 mm": "Maximum Power 100 kW",
            "Vertical movement range": "185 cm"
        }
    }

];

module.exports = products;
