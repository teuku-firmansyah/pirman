var wms_layers = [];


        var lyr_webgis_0 = new ol.layer.Tile({
            'title': 'webgis',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_batasrumah_1 = new ol.format.GeoJSON();
var features_batasrumah_1 = format_batasrumah_1.readFeatures(json_batasrumah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasrumah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasrumah_1.addFeatures(features_batasrumah_1);
var lyr_batasrumah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasrumah_1, 
                style: style_batasrumah_1,
                popuplayertitle: 'batasrumah',
                interactive: true,
                title: '<img src="styles/legend/batasrumah_1.png" /> batasrumah'
            });
var format_Hutan_2 = new ol.format.GeoJSON();
var features_Hutan_2 = format_Hutan_2.readFeatures(json_Hutan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hutan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hutan_2.addFeatures(features_Hutan_2);
var lyr_Hutan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hutan_2, 
                style: style_Hutan_2,
                popuplayertitle: 'Hutan',
                interactive: true,
                title: '<img src="styles/legend/Hutan_2.png" /> Hutan'
            });
var format_Kantin_3 = new ol.format.GeoJSON();
var features_Kantin_3 = format_Kantin_3.readFeatures(json_Kantin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantin_3.addFeatures(features_Kantin_3);
var lyr_Kantin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantin_3, 
                style: style_Kantin_3,
                popuplayertitle: 'Kantin',
                interactive: true,
                title: '<img src="styles/legend/Kantin_3.png" /> Kantin'
            });
var format_kuburan_4 = new ol.format.GeoJSON();
var features_kuburan_4 = format_kuburan_4.readFeatures(json_kuburan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuburan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuburan_4.addFeatures(features_kuburan_4);
var lyr_kuburan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuburan_4, 
                style: style_kuburan_4,
                popuplayertitle: 'kuburan',
                interactive: true,
                title: '<img src="styles/legend/kuburan_4.png" /> kuburan'
            });
var format_lapangan_5 = new ol.format.GeoJSON();
var features_lapangan_5 = format_lapangan_5.readFeatures(json_lapangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_5.addFeatures(features_lapangan_5);
var lyr_lapangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_5, 
                style: style_lapangan_5,
                popuplayertitle: 'lapangan',
                interactive: true,
                title: '<img src="styles/legend/lapangan_5.png" /> lapangan'
            });
var format_Musholla_6 = new ol.format.GeoJSON();
var features_Musholla_6 = format_Musholla_6.readFeatures(json_Musholla_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Musholla_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Musholla_6.addFeatures(features_Musholla_6);
var lyr_Musholla_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Musholla_6, 
                style: style_Musholla_6,
                popuplayertitle: 'Musholla',
                interactive: true,
                title: '<img src="styles/legend/Musholla_6.png" /> Musholla'
            });
var format_kelas_7 = new ol.format.GeoJSON();
var features_kelas_7 = format_kelas_7.readFeatures(json_kelas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelas_7.addFeatures(features_kelas_7);
var lyr_kelas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelas_7, 
                style: style_kelas_7,
                popuplayertitle: 'kelas',
                interactive: true,
                title: '<img src="styles/legend/kelas_7.png" /> kelas'
            });
var format_Tanah_kosong_8 = new ol.format.GeoJSON();
var features_Tanah_kosong_8 = format_Tanah_kosong_8.readFeatures(json_Tanah_kosong_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanah_kosong_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanah_kosong_8.addFeatures(features_Tanah_kosong_8);
var lyr_Tanah_kosong_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanah_kosong_8, 
                style: style_Tanah_kosong_8,
                popuplayertitle: 'Tanah_kosong',
                interactive: true,
                title: '<img src="styles/legend/Tanah_kosong_8.png" /> Tanah_kosong'
            });
var format_wc_sekolah_9 = new ol.format.GeoJSON();
var features_wc_sekolah_9 = format_wc_sekolah_9.readFeatures(json_wc_sekolah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wc_sekolah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wc_sekolah_9.addFeatures(features_wc_sekolah_9);
var lyr_wc_sekolah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wc_sekolah_9, 
                style: style_wc_sekolah_9,
                popuplayertitle: 'wc_sekolah',
                interactive: true,
                title: '<img src="styles/legend/wc_sekolah_9.png" /> wc_sekolah'
            });
var format_lorong_10 = new ol.format.GeoJSON();
var features_lorong_10 = format_lorong_10.readFeatures(json_lorong_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lorong_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lorong_10.addFeatures(features_lorong_10);
var lyr_lorong_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lorong_10, 
                style: style_lorong_10,
                popuplayertitle: 'lorong',
                interactive: true,
                title: '<img src="styles/legend/lorong_10.png" /> lorong'
            });
var format_alur_11 = new ol.format.GeoJSON();
var features_alur_11 = format_alur_11.readFeatures(json_alur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alur_11.addFeatures(features_alur_11);
var lyr_alur_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alur_11, 
                style: style_alur_11,
                popuplayertitle: 'alur',
                interactive: true,
                title: '<img src="styles/legend/alur_11.png" /> alur'
            });
var format_mesjid_12 = new ol.format.GeoJSON();
var features_mesjid_12 = format_mesjid_12.readFeatures(json_mesjid_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjid_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjid_12.addFeatures(features_mesjid_12);
var lyr_mesjid_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mesjid_12, 
                style: style_mesjid_12,
                popuplayertitle: 'mesjid',
                interactive: true,
                title: '<img src="styles/legend/mesjid_12.png" /> mesjid'
            });
var format_tambak_13 = new ol.format.GeoJSON();
var features_tambak_13 = format_tambak_13.readFeatures(json_tambak_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambak_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambak_13.addFeatures(features_tambak_13);
var lyr_tambak_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambak_13, 
                style: style_tambak_13,
                popuplayertitle: 'tambak',
                interactive: true,
                title: '<img src="styles/legend/tambak_13.png" /> tambak'
            });
var format_polyline_14 = new ol.format.GeoJSON();
var features_polyline_14 = format_polyline_14.readFeatures(json_polyline_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polyline_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polyline_14.addFeatures(features_polyline_14);
var lyr_polyline_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polyline_14, 
                style: style_polyline_14,
                popuplayertitle: 'polyline',
                interactive: true,
                title: '<img src="styles/legend/polyline_14.png" /> polyline'
            });
var format_pertamini_15 = new ol.format.GeoJSON();
var features_pertamini_15 = format_pertamini_15.readFeatures(json_pertamini_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pertamini_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pertamini_15.addFeatures(features_pertamini_15);
var lyr_pertamini_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pertamini_15, 
                style: style_pertamini_15,
                popuplayertitle: 'pertamini',
                interactive: true,
                title: '<img src="styles/legend/pertamini_15.png" /> pertamini'
            });
var format_sawah_16 = new ol.format.GeoJSON();
var features_sawah_16 = format_sawah_16.readFeatures(json_sawah_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_16.addFeatures(features_sawah_16);
var lyr_sawah_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_16, 
                style: style_sawah_16,
                popuplayertitle: 'sawah',
                interactive: true,
                title: '<img src="styles/legend/sawah_16.png" /> sawah'
            });
var format_parit_17 = new ol.format.GeoJSON();
var features_parit_17 = format_parit_17.readFeatures(json_parit_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parit_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parit_17.addFeatures(features_parit_17);
var lyr_parit_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parit_17, 
                style: style_parit_17,
                popuplayertitle: 'parit',
                interactive: true,
                title: '<img src="styles/legend/parit_17.png" /> parit'
            });
var format_batas_sekolah_18 = new ol.format.GeoJSON();
var features_batas_sekolah_18 = format_batas_sekolah_18.readFeatures(json_batas_sekolah_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_sekolah_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_sekolah_18.addFeatures(features_batas_sekolah_18);
var lyr_batas_sekolah_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_sekolah_18, 
                style: style_batas_sekolah_18,
                popuplayertitle: 'batas_sekolah',
                interactive: true,
                title: '<img src="styles/legend/batas_sekolah_18.png" /> batas_sekolah'
            });

lyr_webgis_0.setVisible(true);lyr_batasrumah_1.setVisible(true);lyr_Hutan_2.setVisible(true);lyr_Kantin_3.setVisible(true);lyr_kuburan_4.setVisible(true);lyr_lapangan_5.setVisible(true);lyr_Musholla_6.setVisible(true);lyr_kelas_7.setVisible(true);lyr_Tanah_kosong_8.setVisible(true);lyr_wc_sekolah_9.setVisible(true);lyr_lorong_10.setVisible(true);lyr_alur_11.setVisible(true);lyr_mesjid_12.setVisible(true);lyr_tambak_13.setVisible(true);lyr_polyline_14.setVisible(true);lyr_pertamini_15.setVisible(true);lyr_sawah_16.setVisible(true);lyr_parit_17.setVisible(true);lyr_batas_sekolah_18.setVisible(true);
var layersList = [lyr_webgis_0,lyr_batasrumah_1,lyr_Hutan_2,lyr_Kantin_3,lyr_kuburan_4,lyr_lapangan_5,lyr_Musholla_6,lyr_kelas_7,lyr_Tanah_kosong_8,lyr_wc_sekolah_9,lyr_lorong_10,lyr_alur_11,lyr_mesjid_12,lyr_tambak_13,lyr_polyline_14,lyr_pertamini_15,lyr_sawah_16,lyr_parit_17,lyr_batas_sekolah_18];
lyr_batasrumah_1.set('fieldAliases', {'status_kep': 'status_kep', 'jenis_bang': 'jenis_bang', 'jenis_lant': 'jenis_lant', 'nama_pengh': 'nama_pengh', 'pendidikan': 'pendidikan', 'pekerjaan': 'pekerjaan', 'jumlah_lak': 'jumlah_lak', 'jumlah_per': 'jumlah_per', 'total_huni': 'total_huni', 'luas_bangu': 'luas_bangu', 'no_rumah': 'no_rumah', 'no_Telepon': 'no_Telepon', 'no_ktp': 'no_ktp', });
lyr_Hutan_2.set('fieldAliases', {'Id': 'Id', });
lyr_Kantin_3.set('fieldAliases', {'Id': 'Id', });
lyr_kuburan_4.set('fieldAliases', {'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_lahan': 'luas_lahan', });
lyr_lapangan_5.set('fieldAliases', {'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_kegi': 'jenis_kegi', 'luas_lahan': 'luas_lahan', 'luas_bangu': 'luas_bangu', });
lyr_Musholla_6.set('fieldAliases', {'nama_musho': 'nama_musho', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', 'imam_mesji': 'imam_mesji', 'no_contact': 'no_contact', });
lyr_kelas_7.set('fieldAliases', {'Id': 'Id', });
lyr_Tanah_kosong_8.set('fieldAliases', {'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_tana': 'jenis_tana', 'prediksi_j': 'prediksi_j', 'jenis_irig': 'jenis_irig', 'status': 'status', 'luas_lahan': 'luas_lahan', });
lyr_wc_sekolah_9.set('fieldAliases', {'Id': 'Id', });
lyr_lorong_10.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'status_jln': 'status_jln', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'ThnPerbaik': 'ThnPerbaik', });
lyr_alur_11.set('fieldAliases', {'nama_alur': 'nama_alur', });
lyr_mesjid_12.set('fieldAliases', {'nama_mesji': 'nama_mesji', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', 'nama_imam_': 'nama_imam_', 'no_contact': 'no_contact', });
lyr_tambak_13.set('fieldAliases', {'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_ikan': 'jenis_ikan', 'status_usa': 'status_usa', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', });
lyr_polyline_14.set('fieldAliases', {'panjang': 'panjang', 'P': 'P', 'ID': 'ID', 'Nama': 'Nama', 'Lebar': 'Lebar', 'Status_Jln': 'Status_Jln', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'ThnPebaiki': 'ThnPebaiki', });
lyr_pertamini_15.set('fieldAliases', {'nama_perta': 'nama_perta', });
lyr_sawah_16.set('fieldAliases', {'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_tana': 'jenis_tana', 'prediksi_j': 'prediksi_j', 'jenis_irig': 'jenis_irig', 'luas_lahan': 'luas_lahan', 'status': 'status', });
lyr_parit_17.set('fieldAliases', {'Id': 'Id', 'Panjang': 'Panjang', });
lyr_batas_sekolah_18.set('fieldAliases', {'nama_sekol': 'nama_sekol', 'nama_kepse': 'nama_kepse', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', });
lyr_batasrumah_1.set('fieldImages', {'status_kep': '', 'jenis_bang': '', 'jenis_lant': '', 'nama_pengh': '', 'pendidikan': '', 'pekerjaan': '', 'jumlah_lak': '', 'jumlah_per': '', 'total_huni': '', 'luas_bangu': '', 'no_rumah': '', 'no_Telepon': '', 'no_ktp': '', });
lyr_Hutan_2.set('fieldImages', {'Id': '', });
lyr_Kantin_3.set('fieldImages', {'Id': '', });
lyr_kuburan_4.set('fieldImages', {'nama_pemil': '', 'no_contact': '', 'luas_lahan': '', });
lyr_lapangan_5.set('fieldImages', {'nama_pemil': '', 'no_contact': '', 'jenis_kegi': '', 'luas_lahan': '', 'luas_bangu': '', });
lyr_Musholla_6.set('fieldImages', {'nama_musho': '', 'luas_bangu': '', 'luas_lahan': '', 'imam_mesji': '', 'no_contact': '', });
lyr_kelas_7.set('fieldImages', {'Id': '', });
lyr_Tanah_kosong_8.set('fieldImages', {'nama_pemil': '', 'no_contact': '', 'jenis_tana': '', 'prediksi_j': '', 'jenis_irig': '', 'status': '', 'luas_lahan': '', });
lyr_wc_sekolah_9.set('fieldImages', {'Id': '', });
lyr_lorong_10.set('fieldImages', {'Id': '', 'Nama': '', 'Panjang': '', 'Lebar': '', 'status_jln': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'ThnPerbaik': '', });
lyr_alur_11.set('fieldImages', {'nama_alur': '', });
lyr_mesjid_12.set('fieldImages', {'nama_mesji': '', 'luas_bangu': '', 'luas_tanah': '', 'nama_imam_': '', 'no_contact': '', });
lyr_tambak_13.set('fieldImages', {'nama_pemil': '', 'no_contact': '', 'jenis_ikan': '', 'status_usa': '', 'luas_bangu': '', 'luas_lahan': '', });
lyr_polyline_14.set('fieldImages', {'panjang': '', 'P': '', 'ID': '', 'Nama': '', 'Lebar': '', 'Status_Jln': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'ThnPebaiki': '', });
lyr_pertamini_15.set('fieldImages', {'nama_perta': '', });
lyr_sawah_16.set('fieldImages', {'nama_pemil': '', 'no_contact': '', 'jenis_tana': '', 'prediksi_j': '', 'jenis_irig': '', 'luas_lahan': '', 'status': '', });
lyr_parit_17.set('fieldImages', {'Id': '', 'Panjang': '', });
lyr_batas_sekolah_18.set('fieldImages', {'nama_sekol': '', 'nama_kepse': '', 'no_contact': '', 'luas_bangu': '', 'luas_tanah': '', });
lyr_batasrumah_1.set('fieldLabels', {'status_kep': 'no label', 'jenis_bang': 'no label', 'jenis_lant': 'no label', 'nama_pengh': 'no label', 'pendidikan': 'no label', 'pekerjaan': 'no label', 'jumlah_lak': 'no label', 'jumlah_per': 'no label', 'total_huni': 'no label', 'luas_bangu': 'no label', 'no_rumah': 'no label', 'no_Telepon': 'no label', 'no_ktp': 'no label', });
lyr_Hutan_2.set('fieldLabels', {'Id': 'no label', });
lyr_Kantin_3.set('fieldLabels', {'Id': 'no label', });
lyr_kuburan_4.set('fieldLabels', {'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_lahan': 'no label', });
lyr_lapangan_5.set('fieldLabels', {'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_kegi': 'no label', 'luas_lahan': 'no label', 'luas_bangu': 'no label', });
lyr_Musholla_6.set('fieldLabels', {'nama_musho': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', 'imam_mesji': 'no label', 'no_contact': 'no label', });
lyr_kelas_7.set('fieldLabels', {'Id': 'no label', });
lyr_Tanah_kosong_8.set('fieldLabels', {'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_tana': 'no label', 'prediksi_j': 'no label', 'jenis_irig': 'no label', 'status': 'no label', 'luas_lahan': 'no label', });
lyr_wc_sekolah_9.set('fieldLabels', {'Id': 'no label', });
lyr_lorong_10.set('fieldLabels', {'Id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'status_jln': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'ThnPerbaik': 'no label', });
lyr_alur_11.set('fieldLabels', {'nama_alur': 'no label', });
lyr_mesjid_12.set('fieldLabels', {'nama_mesji': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', 'nama_imam_': 'no label', 'no_contact': 'no label', });
lyr_tambak_13.set('fieldLabels', {'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_ikan': 'no label', 'status_usa': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', });
lyr_polyline_14.set('fieldLabels', {'panjang': 'no label', 'P': 'no label', 'ID': 'no label', 'Nama': 'no label', 'Lebar': 'no label', 'Status_Jln': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'ThnPebaiki': 'no label', });
lyr_pertamini_15.set('fieldLabels', {'nama_perta': 'no label', });
lyr_sawah_16.set('fieldLabels', {'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_tana': 'no label', 'prediksi_j': 'no label', 'jenis_irig': 'no label', 'luas_lahan': 'no label', 'status': 'no label', });
lyr_parit_17.set('fieldLabels', {'Id': 'no label', 'Panjang': 'no label', });
lyr_batas_sekolah_18.set('fieldLabels', {'nama_sekol': 'no label', 'nama_kepse': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', });
lyr_batas_sekolah_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});