import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

const options = [
  {
  value: '北京市',

  label: '北京市',

  children: [
    {

      value: '北京市',

      label: '北京市',

      children: [

        {value: '东城区', label: '东城区',isLeaf: true},

        {value: '西城区', label: '西城区',isLeaf: true},

        {value: '崇文区', label: '崇文区',isLeaf: true},

        {value: '宣武区', label: '宣武区',isLeaf: true},

        {value: '朝阳区', label: '朝阳区',isLeaf: true},

        {value: '丰台区', label: '丰台区',isLeaf: true},

        {value: '石景山区', label: '石景山区',isLeaf: true},

        {value: '海淀区', label: '海淀区',isLeaf: true},

        {value: '门头沟区', label: '门头沟区',isLeaf: true},

        {value: '房山区', label: '房山区',isLeaf: true},

        {value: '通州区', label: '通州区',isLeaf: true},

        {value: '顺义区', label: '顺义区',isLeaf: true},

        {value: '昌平区', label: '昌平区',isLeaf: true},

        {value: '大兴区', label: '大兴区',isLeaf: true},

        {value: '怀柔区', label: '怀柔区',isLeaf: true},

        {value: '平谷区', label: '平谷区',isLeaf: true},

        {value: '密云县', label: '密云县' ,isLeaf: true},

        {
          value: '延庆县', label: '延庆县', isLeaf: true
        }

      ]

    }
  ]

},
  {

    value: '天津市',

    label: '天津市',

    children: [

      {

        value: '天津',

        label: '天津',

        children: [

          {value: '和平区', label: '和平区',isLeaf: true},

          {value: '河东区', label: '河东区',isLeaf: true},

          {value: '河西区', label: '河西区',isLeaf: true},

          {value: '南开区', label: '南开区',isLeaf: true},

          {value: '河北区', label: '河北区',isLeaf: true},

          {value: '红桥区', label: '红桥区',isLeaf: true},

          {value: '塘沽区', label: '塘沽区',isLeaf: true},

          {value: '汉沽区', label: '汉沽区',isLeaf: true},

          {value: '大港区', label: '大港区',isLeaf: true},

          {value: '东丽区', label: '东丽区',isLeaf: true},

          {value: '西青区', label: '西青区',isLeaf: true},

          {value: '津南区', label: '津南区',isLeaf: true},

          {value: '北辰区', label: '北辰区',isLeaf: true},

          {value: '武清区', label: '武清区',isLeaf: true},

          {value: '宝坻区', label: '宝坻区',isLeaf: true},

          {value: '宁河县', label: '宁河县',isLeaf: true},

          {value: '静海县', label: '静海县',isLeaf: true},

          {
            value: '蓟县', label: '蓟县',
            isLeaf: true
          }

        ]

      }

    ]

  },
  {

    value: '河北省',

    label: '河北省',

    children: [

      {

        value: '石家庄市',

        label: '石家庄市',

        children: [

          {value: '长安区', label: '长安区',isLeaf: true},

          {value: '桥东区', label: '桥东区',isLeaf: true},

          {value: '桥西区', label: '桥西区',isLeaf: true},

          {value: '新华区', label: '新华区',isLeaf: true},

          {value: '井陉矿区', label: '井陉矿区',isLeaf: true},

          {value: '裕华区', label: '裕华区',isLeaf: true},

          {value: '井陉县', label: '井陉县',isLeaf: true},

          {value: '正定县', label: '正定县',isLeaf: true},

          {value: '栾城县', label: '栾城县',isLeaf: true},

          {value: '行唐县', label: '行唐县',isLeaf: true},

          {value: '灵寿县', label: '灵寿县',isLeaf: true},

          {value: '高邑县', label: '高邑县',isLeaf: true},

          {value: '深泽县', label: '深泽县',isLeaf: true},

          {value: '赞皇县', label: '赞皇县',isLeaf: true},

          {value: '无极县', label: '无极县',isLeaf: true},

          {value: '平山县', label: '平山县',isLeaf: true},

          {value: '元氏县', label: '元氏县',isLeaf: true},

          {value: '赵县', label: '赵县',isLeaf: true},

          {value: '辛集市', label: '辛集市',isLeaf: true},

          {value: '藁城市', label: '藁城市',isLeaf: true},

          {value: '晋州市', label: '晋州市',isLeaf: true},

          {value: '新乐市', label: '新乐市',isLeaf: true},

          {
            value: '鹿泉市', label: '鹿泉市',
            isLeaf: true
          }

        ]

      },

      {

        value: '唐山市',

        label: '唐山市',

        children: [

          {value: '路南区', label: '路南区',isLeaf: true},

          {value: '路北区', label: '路北区',isLeaf: true},

          {value: '古冶区', label: '古冶区',isLeaf: true},

          {value: '开平区', label: '开平区',isLeaf: true},

          {value: '丰南区', label: '丰南区',isLeaf: true},

          {value: '丰润区', label: '丰润区',isLeaf: true},

          {value: '滦县', label: '滦县',isLeaf: true},

          {value: '滦南县', label: '滦南县',isLeaf: true},

          {value: '乐亭县', label: '乐亭县',isLeaf: true},

          {value: '迁西县', label: '迁西县',isLeaf: true},

          {value: '玉田县', label: '玉田县',isLeaf: true},

          {value: '唐海县', label: '唐海县',isLeaf: true},

          {value: '遵化市', label: '遵化市',isLeaf: true},

          {value: '迁安市', label: '迁安市',
            isLeaf: true}

        ]

      },

      {

        value: '秦皇岛市',

        label: '秦皇岛市',

        children: [

          {value: '海港区', label: '海港区',isLeaf: true},

          {value: '山海关区', label: '山海关区',isLeaf: true},

          {value: '北戴河区', label: '北戴河区',isLeaf: true},

          {value: '青龙满族自治县', label: '青龙满族自治县',isLeaf: true},

          {value: '昌黎县', label: '昌黎县',isLeaf: true},

          {value: '抚宁县', label: '抚宁县',isLeaf: true},

          {value: '卢龙县', label: '卢龙县',
            isLeaf: true}

        ]

      },

      {

        value: '邯郸市',

        label: '邯郸市',

        children: [

          {value: '邯山区', label: '邯山区',isLeaf: true},

          {value: '丛台区', label: '丛台区',isLeaf: true},

          {value: '复兴区', label: '复兴区',isLeaf: true},

          {value: '峰峰矿区', label: '峰峰矿区',isLeaf: true},

          {value: '邯郸县', label: '邯郸县',isLeaf: true},

          {value: '临漳县', label: '临漳县',isLeaf: true},

          {value: '成安县', label: '成安县',isLeaf: true},

          {value: '大名县', label: '大名县',isLeaf: true},

          {value: '涉县', label: '涉县',isLeaf: true},

          {value: '磁县', label: '磁县',isLeaf: true},

          {value: '肥乡县', label: '肥乡县',isLeaf: true},

          {value: '永年县', label: '永年县',isLeaf: true},

          {value: '邱县', label: '邱县',isLeaf: true},

          {value: '鸡泽县', label: '鸡泽县',isLeaf: true},

          {value: '广平县', label: '广平县',isLeaf: true},

          {value: '馆陶县', label: '馆陶县',isLeaf: true},

          {value: '魏县', label: '魏县',isLeaf: true},

          {value: '曲周县', label: '曲周县',isLeaf: true},

          {value: '武安市', label: '武安市',
            isLeaf: true}

        ]

      },

      {

        value: '邢台市',

        label: '邢台市',

        children: [

          {value: '桥东区', label: '桥东区',isLeaf: true},

          {value: '桥西区', label: '桥西区',isLeaf: true},

          {value: '邢台县', label: '邢台县',isLeaf: true},

          {value: '临城县', label: '临城县',isLeaf: true},

          {value: '内丘县', label: '内丘县',isLeaf: true},

          {value: '柏乡县', label: '柏乡县',isLeaf: true},

          {value: '隆尧县', label: '隆尧县',isLeaf: true},

          {value: '任县', label: '任县',isLeaf: true},

          {value: '南和县', label: '南和县',isLeaf: true},

          {value: '宁晋县', label: '宁晋县',isLeaf: true},

          {value: '巨鹿县', label: '巨鹿县',isLeaf: true},

          {value: '新河县', label: '新河县',isLeaf: true},

          {value: '广宗县', label: '广宗县',isLeaf: true},

          {value: '平乡县', label: '平乡县',isLeaf: true},

          {value: '威县', label: '威县',isLeaf: true},

          {value: '清河县', label: '清河县',isLeaf: true},

          {value: '临西县', label: '临西县',isLeaf: true},

          {value: '南宫市', label: '南宫市',isLeaf: true},

          {value: '沙河市', label: '沙河市',
            isLeaf: true}

        ]

      },

      {

        value: '保定市',

        label: '保定市',

        children: [

          {value: '新市区', label: '新市区',isLeaf: true},

          {value: '北市区', label: '北市区',isLeaf: true},

          {value: '南市区', label: '南市区',isLeaf: true},

          {value: '满城县', label: '满城县',isLeaf: true},

          {value: '清苑县', label: '清苑县',isLeaf: true},

          {value: '涞水县', label: '涞水县',isLeaf: true},

          {value: '阜平县', label: '阜平县',isLeaf: true},

          {value: '徐水县', label: '徐水县',isLeaf: true},

          {value: '定兴县', label: '定兴县',isLeaf: true},

          {value: '唐县', label: '唐县',isLeaf: true},

          {value: '高阳县', label: '高阳县',isLeaf: true},

          {value: '容城县', label: '容城县',isLeaf: true},

          {value: '涞源县', label: '涞源县',isLeaf: true},

          {value: '望都县', label: '望都县',isLeaf: true},

          {value: '安新县', label: '安新县',isLeaf: true},

          {value: '易县', label: '易县',isLeaf: true},

          {value: '曲阳县', label: '曲阳县',isLeaf: true},

          {value: '蠡县', label: '蠡县',isLeaf: true},

          {value: '顺平县', label: '顺平县',isLeaf: true},

          {value: '博野县', label: '博野县',isLeaf: true},

          {value: '雄县', label: '雄县',isLeaf: true},

          {value: '涿州市', label: '涿州市',isLeaf: true},

          {value: '定州市', label: '定州市',isLeaf: true},

          {value: '安国市', label: '安国市',isLeaf: true},

          {value: '高碑店市', label: '高碑店市',
            isLeaf: true}

        ]

      },

      {

        value: '张家口市',

        label: '张家口市',

        children: [

          {value: '桥东区', label: '桥东区',isLeaf: true},

          {value: '桥西区', label: '桥西区',isLeaf: true},

          {value: '宣化区', label: '宣化区',isLeaf: true},

          {value: '下花园区', label: '下花园区',isLeaf: true},

          {value: '宣化县', label: '宣化县',isLeaf: true},

          {value: '张北县', label: '张北县',isLeaf: true},

          {value: '康保县', label: '康保县',isLeaf: true},

          {value: '沽源县', label: '沽源县',isLeaf: true},

          {value: '尚义县', label: '尚义县',isLeaf: true},

          {value: '蔚县', label: '蔚县',isLeaf: true},

          {value: '阳原县', label: '阳原县',isLeaf: true},

          {value: '怀安县', label: '怀安县',isLeaf: true},

          {value: '万全县', label: '万全县',isLeaf: true},

          {value: '怀来县', label: '怀来县',isLeaf: true},

          {value: '涿鹿县', label: '涿鹿县',isLeaf: true},

          {value: '赤城县', label: '赤城县',isLeaf: true},

          {value: '崇礼县', label: '崇礼县',
            isLeaf: true}

        ]

      },

      {

        value: '承德市',

        label: '承德市',

        children: [

          {value: '双桥区', label: '双桥区',isLeaf: true},

          {value: '双滦区', label: '双滦区',isLeaf: true},

          {value: '鹰手营子矿区', label: '鹰手营子矿区',isLeaf: true},

          {value: '承德县', label: '承德县',isLeaf: true},

          {value: '兴隆县', label: '兴隆县',isLeaf: true},

          {value: '平泉县', label: '平泉县',isLeaf: true},

          {value: '滦平县', label: '滦平县',isLeaf: true},

          {value: '隆化县', label: '隆化县',isLeaf: true},

          {value: '丰宁满族自治县', label: '丰宁满族自治县',isLeaf: true},

          {value: '宽城满族自治县', label: '宽城满族自治县',isLeaf: true},

          {value: '围场满族蒙古族自治县', label: '围场满族蒙古族自治县',
            isLeaf: true}

        ]

      },

      {

        value: '沧州市',

        label: '沧州市',

        children: [

          {value: '新华区', label: '新华区',isLeaf: true},

          {value: '运河区', label: '运河区',isLeaf: true},

          {value: '沧县', label: '沧县',isLeaf: true},

          {value: '青县', label: '青县',isLeaf: true},

          {value: '东光县', label: '东光县',isLeaf: true},

          {value: '海兴县', label: '海兴县',isLeaf: true},

          {value: '盐山县', label: '盐山县',isLeaf: true},

          {value: '肃宁县', label: '肃宁县',isLeaf: true},

          {value: '南皮县', label: '南皮县',isLeaf: true},

          {value: '吴桥县', label: '吴桥县',isLeaf: true},

          {value: '献县', label: '献县',isLeaf: true},

          {value: '孟村回族自治县', label: '孟村回族自治县',isLeaf: true},

          {value: '泊头市', label: '泊头市',isLeaf: true},

          {value: '任丘市', label: '任丘市',isLeaf: true},

          {value: '黄骅市', label: '黄骅市',isLeaf: true},

          {value: '河间市', label: '河间市',
            isLeaf: true}

        ]

      },

      {

        value: '廊坊市',

        label: '廊坊市',

        children: [

          {value: '安次区', label: '安次区',isLeaf: true},

          {value: '广阳区', label: '广阳区',isLeaf: true},

          {value: '固安县', label: '固安县',isLeaf: true},

          {value: '永清县', label: '永清县',isLeaf: true},

          {value: '香河县', label: '香河县',isLeaf: true},

          {value: '大城县', label: '大城县',isLeaf: true},

          {value: '文安县', label: '文安县',isLeaf: true},

          {value: '大厂回族自治县', label: '大厂回族自治县',isLeaf: true},

          {value: '霸州市', label: '霸州市',isLeaf: true},

          {value: '三河市', label: '三河市',
            isLeaf: true}

        ]

      },

      {

        value: '衡水市',

        label: '衡水市',

        children: [

          {value: '桃城区', label: '桃城区',isLeaf: true},

          {value: '枣强县', label: '枣强县',isLeaf: true},

          {value: '武邑县', label: '武邑县',isLeaf: true},

          {value: '武强县', label: '武强县',isLeaf: true},

          {value: '饶阳县', label: '饶阳县',isLeaf: true},

          {value: '安平县', label: '安平县',isLeaf: true},

          {value: '故城县', label: '故城县',isLeaf: true},

          {value: '景县', label: '景县',isLeaf: true},

          {value: '阜城县', label: '阜城县',isLeaf: true},

          {value: '冀州市', label: '冀州市',isLeaf: true},

          {value: '深州市', label: '深州市',
            isLeaf: true}

        ]

      }

    ]

  },
  {

    value: '山西省',

    label: '山西省',

    children: [

      {

        value: '太原市',

        label: '太原市',

        children: [

          {value: '小店区', label: '小店区',isLeaf: true},

          {value: '迎泽区', label: '迎泽区',isLeaf: true},

          {value: '杏花岭区', label: '杏花岭区',isLeaf: true},

          {value: '尖草坪区', label: '尖草坪区',isLeaf: true},

          {value: '万柏林区', label: '万柏林区',isLeaf: true},

          {value: '晋源区', label: '晋源区',isLeaf: true},

          {value: '清徐县', label: '清徐县',isLeaf: true},

          {value: '阳曲县', label: '阳曲县',isLeaf: true},

          {value: '娄烦县', label: '娄烦县',isLeaf: true},

          {value: '古交市', label: '古交市',
            isLeaf: true}

        ]

      },

      {

        value: '大同市',

        label: '大同市',

        children: [

          {value: '城区', label: '城区',isLeaf: true},

          {value: '矿区', label: '矿区',isLeaf: true},

          {value: '南郊区', label: '南郊区',isLeaf: true},

          {value: '新荣区', label: '新荣区',isLeaf: true},

          {value: '阳高县', label: '阳高县',isLeaf: true},

          {value: '天镇县', label: '天镇县',isLeaf: true},

          {value: '广灵县', label: '广灵县',isLeaf: true},

          {value: '灵丘县', label: '灵丘县',isLeaf: true},

          {value: '浑源县', label: '浑源县',isLeaf: true},

          {value: '左云县', label: '左云县',isLeaf: true},

          {value: '大同县', label: '大同县',
            isLeaf: true}

        ]

      },

      {

        value: '阳泉市',

        label: '阳泉市',

        children: [

          {value: '城区', label: '城区',isLeaf: true},

          {value: '矿区', label: '矿区',isLeaf: true},

          {value: '郊区', label: '郊区',isLeaf: true},

          {value: '平定县', label: '平定县',isLeaf: true},

          {value: '盂县', label: '盂县',
            isLeaf: true}

        ]

      },

      {

        value: '长治市',

        label: '长治市',

        children: [

          {value: '城区', label: '城区',isLeaf: true},

          {value: '郊区', label: '郊区',isLeaf: true},

          {value: '长治县', label: '长治县',isLeaf: true},

          {value: '襄垣县', label: '襄垣县',isLeaf: true},

          {value: '屯留县', label: '屯留县',isLeaf: true},

          {value: '平顺县', label: '平顺县',isLeaf: true},

          {value: '黎城县', label: '黎城县',isLeaf: true},

          {value: '壶关县', label: '壶关县',isLeaf: true},

          {value: '长子县', label: '长子县',isLeaf: true},

          {value: '武乡县', label: '武乡县',isLeaf: true},

          {value: '沁县', label: '沁县',isLeaf: true},

          {value: '沁源县', label: '沁源县',isLeaf: true},

          {value: '潞城市', label: '潞城市',
            isLeaf: true}

        ]

      },

      {

        value: '晋城市',

        label: '晋城市',

        children: [

          {value: '城区', label: '城区',isLeaf: true},

          {value: '沁水县', label: '沁水县',isLeaf: true},

          {value: '阳城县', label: '阳城县',isLeaf: true},

          {value: '陵川县', label: '陵川县',isLeaf: true},

          {value: '泽州县', label: '泽州县',isLeaf: true},

          {value: '高平市', label: '高平市',
            isLeaf: true}

        ]

      },

      {

        value: '朔州市',

        label: '朔州市',

        children: [

          {value: '朔城区', label: '朔城区',isLeaf: true},

          {value: '平鲁区', label: '平鲁区',isLeaf: true},

          {value: '山阴县', label: '山阴县',isLeaf: true},

          {value: '应县', label: '应县',isLeaf: true},

          {value: '右玉县', label: '右玉县',isLeaf: true},

          {value: '怀仁县', label: '怀仁县',
            isLeaf: true}

        ]

      },

      {

        value: '晋中市',

        label: '晋中市',

        children: [

          {value: '榆次区', label: '榆次区',isLeaf: true},

          {value: '榆社县', label: '榆社县',isLeaf: true},

          {value: '左权县', label: '左权县',isLeaf: true},

          {value: '和顺县', label: '和顺县',isLeaf: true},

          {value: '昔阳县', label: '昔阳县',isLeaf: true},

          {value: '寿阳县', label: '寿阳县',isLeaf: true},

          {value: '太谷县', label: '太谷县',isLeaf: true},

          {value: '祁县', label: '祁县',isLeaf: true},

          {value: '平遥县', label: '平遥县',isLeaf: true},

          {value: '灵石县', label: '灵石县',isLeaf: true},

          {value: '介休市', label: '介休市',
            isLeaf: true}

        ]

      },

      {

        value: '运城市',

        label: '运城市',

        children: [

          {value: '盐湖区', label: '盐湖区',isLeaf: true},

          {value: '临猗县', label: '临猗县',isLeaf: true},

          {value: '万荣县', label: '万荣县',isLeaf: true},

          {value: '闻喜县', label: '闻喜县',isLeaf: true},

          {value: '稷山县', label: '稷山县',isLeaf: true},

          {value: '新绛县', label: '新绛县',isLeaf: true},

          {value: '绛县', label: '绛县',isLeaf: true},

          {value: '垣曲县', label: '垣曲县',isLeaf: true},

          {value: '夏县', label: '夏县',isLeaf: true},

          {value: '平陆县', label: '平陆县',isLeaf: true},

          {value: '芮城县', label: '芮城县',isLeaf: true},

          {value: '永济市', label: '永济市',isLeaf: true},

          {value: '河津市', label: '河津市',
            isLeaf: true}

        ]

      },

      {

        value: '忻州市',

        label: '忻州市',

        children: [

          {value: '忻府区', label: '忻府区',isLeaf: true},

          {value: '定襄县', label: '定襄县',isLeaf: true},

          {value: '五台县', label: '五台县',isLeaf: true},

          {value: '代县', label: '代县',isLeaf: true},

          {value: '繁峙县', label: '繁峙县',isLeaf: true},

          {value: '宁武县', label: '宁武县',isLeaf: true},

          {value: '静乐县', label: '静乐县',isLeaf: true},

          {value: '神池县', label: '神池县',isLeaf: true},

          {value: '五寨县', label: '五寨县',isLeaf: true},

          {value: '岢岚县', label: '岢岚县',isLeaf: true},

          {value: '河曲县', label: '河曲县',isLeaf: true},

          {value: '保德县', label: '保德县',isLeaf: true},

          {value: '偏关县', label: '偏关县',isLeaf: true},

          {value: '原平市', label: '原平市',
            isLeaf: true}

        ]

      },

      {

        value: '临汾市',

        label: '临汾市',

        children: [

          {value: '尧都区', label: '尧都区',isLeaf: true},

          {value: '曲沃县', label: '曲沃县',isLeaf: true},

          {value: '翼城县', label: '翼城县',isLeaf: true},

          {value: '襄汾县', label: '襄汾县',isLeaf: true},

          {value: '洪洞县', label: '洪洞县',isLeaf: true},

          {value: '古县', label: '古县',isLeaf: true},

          {value: '安泽县', label: '安泽县',isLeaf: true},

          {value: '浮山县', label: '浮山县',isLeaf: true},

          {value: '吉县', label: '吉县',isLeaf: true},

          {value: '乡宁县', label: '乡宁县',isLeaf: true},

          {value: '大宁县', label: '大宁县',isLeaf: true},

          {value: '隰县', label: '隰县',isLeaf: true},

          {value: '永和县', label: '永和县',isLeaf: true},

          {value: '蒲县', label: '蒲县',isLeaf: true},

          {value: '汾西县', label: '汾西县',isLeaf: true},

          {value: '侯马市', label: '侯马市',isLeaf: true},

          {value: '霍州市', label: '霍州市',
            isLeaf: true}

        ]

      },

      {

        value: '吕梁市',

        label: '吕梁市',

        children: [

          {value: '离石区', label: '离石区',isLeaf: true},

          {value: '文水县', label: '文水县',isLeaf: true},

          {value: '交城县', label: '交城县',isLeaf: true},

          {value: '兴县', label: '兴县',isLeaf: true},

          {value: '临县', label: '临县',isLeaf: true},

          {value: '柳林县', label: '柳林县',isLeaf: true},

          {value: '石楼县', label: '石楼县',isLeaf: true},

          {value: '岚县', label: '岚县',isLeaf: true},

          {value: '方山县', label: '方山县',isLeaf: true},

          {value: '中阳县', label: '中阳县',isLeaf: true},

          {value: '交口县', label: '交口县',isLeaf: true},

          {value: '孝义市', label: '孝义市',isLeaf: true},

          {value: '汾阳市', label: '汾阳市',
            isLeaf: true}

        ]

      }

    ]

  },
  {

    value: '内蒙古',

    label: '内蒙古',

    children: [

      {

        value: '呼和浩特市',

        label: '呼和浩特市',

        children: [

          {value: '新城区', label: '新城区',isLeaf: true},

          {value: '回民区', label: '回民区',isLeaf: true},

          {value: '玉泉区', label: '玉泉区',isLeaf: true},

          {value: '赛罕区', label: '赛罕区',isLeaf: true},

          {value: '土默特左旗', label: '土默特左旗',isLeaf: true},

          {value: '托克托县', label: '托克托县',isLeaf: true},

          {value: '和林格尔县', label: '和林格尔县',isLeaf: true},

          {value: '清水河县', label: '清水河县',isLeaf: true},

          {value: '武川县', label: '武川县',
            isLeaf: true}

        ]

      },

      {

        value: '包头市',

        label: '包头市',

        children: [

          {value: '东河区', label: '东河区',isLeaf: true},

          {value: '昆都仑区', label: '昆都仑区',isLeaf: true},

          {value: '青山区', label: '青山区',isLeaf: true},

          {value: '石拐区', label: '石拐区',isLeaf: true},

          {value: '白云矿区', label: '白云矿区',isLeaf: true},

          {value: '九原区', label: '九原区',isLeaf: true},

          {value: '土默特右旗', label: '土默特右旗',isLeaf: true},

          {value: '固阳县', label: '固阳县',isLeaf: true},

          {value: '达尔罕茂明安联合旗', label: '达尔罕茂明安联合旗',
            isLeaf: true}

        ]

      },

      {

        value: '乌海市',

        label: '乌海市',

        children: [

          {value: '海勃湾区', label: '海勃湾区',isLeaf: true},

          {value: '海南区', label: '海南区',isLeaf: true},

          {value: '乌达区', label: '乌达区',
            isLeaf: true}

        ]

      },

      {

        value: '赤峰市',

        label: '赤峰市',

        children: [

          {value: '红山区', label: '红山区',isLeaf: true},

          {value: '元宝山区', label: '元宝山区',isLeaf: true},

          {value: '松山区', label: '松山区',isLeaf: true},

          {value: '阿鲁科尔沁旗', label: '阿鲁科尔沁旗',isLeaf: true},

          {value: '巴林左旗', label: '巴林左旗',isLeaf: true},

          {value: '巴林右旗', label: '巴林右旗',isLeaf: true},

          {value: '林西县', label: '林西县',isLeaf: true},

          {value: '克什克腾旗', label: '克什克腾旗',isLeaf: true},

          {value: '翁牛特旗', label: '翁牛特旗',isLeaf: true},

          {value: '喀喇沁旗', label: '喀喇沁旗',isLeaf: true},

          {value: '宁城县', label: '宁城县',isLeaf: true},

          {value: '敖汉旗', label: '敖汉旗',
            isLeaf: true}

        ]

      },

      {

        value: '通辽市',

        label: '通辽市',

        children: [

          {value: '科尔沁区', label: '科尔沁区',isLeaf: true},

          {value: '科尔沁左翼中旗', label: '科尔沁左翼中旗',isLeaf: true},

          {value: '科尔沁左翼后旗', label: '科尔沁左翼后旗',isLeaf: true},

          {value: '开鲁县', label: '开鲁县',isLeaf: true},

          {value: '库伦旗', label: '库伦旗',isLeaf: true},

          {value: '奈曼旗', label: '奈曼旗',isLeaf: true},

          {value: '扎鲁特旗', label: '扎鲁特旗',isLeaf: true},

          {value: '霍林郭勒市', label: '霍林郭勒市',
            isLeaf: true}

        ]

      },

      {

        value: '鄂尔多斯市',

        label: '鄂尔多斯市',

        children: [

          {value: '东胜区', label: '东胜区',isLeaf: true},

          {value: '达拉特旗', label: '达拉特旗',isLeaf: true},

          {value: '准格尔旗', label: '准格尔旗',isLeaf: true},

          {value: '鄂托克前旗', label: '鄂托克前旗',isLeaf: true},

          {value: '鄂托克旗', label: '鄂托克旗',isLeaf: true},

          {value: '杭锦旗', label: '杭锦旗',isLeaf: true},

          {value: '乌审旗', label: '乌审旗',isLeaf: true},

          {value: '伊金霍洛旗', label: '伊金霍洛旗',
            isLeaf: true}

        ]

      },

      {

        value: '呼伦贝尔市',

        label: '呼伦贝尔市',

        children: [

          {value: '海拉尔区', label: '海拉尔区',isLeaf: true},

          {value: '阿荣旗', label: '阿荣旗',isLeaf: true},

          {value: '莫力达瓦达斡尔族自治旗', label: '莫力达瓦达斡尔族自治旗',isLeaf: true},

          {value: '鄂伦春自治旗', label: '鄂伦春自治旗',isLeaf: true},

          {value: '鄂温克族自治旗', label: '鄂温克族自治旗',isLeaf: true},

          {value: '陈巴尔虎旗', label: '陈巴尔虎旗',isLeaf: true},

          {value: '新巴尔虎左旗', label: '新巴尔虎左旗',isLeaf: true},

          {value: '新巴尔虎右旗', label: '新巴尔虎右旗',isLeaf: true},

          {value: '满洲里市', label: '满洲里市',isLeaf: true},

          {value: '牙克石市', label: '牙克石市',isLeaf: true},

          {value: '扎兰屯市', label: '扎兰屯市',isLeaf: true},

          {value: '额尔古纳市', label: '额尔古纳市',isLeaf: true},

          {value: '根河市', label: '根河市',
            isLeaf: true}

        ]

      },

      {

        value: '巴彦淖尔市',

        label: '巴彦淖尔市',

        children: [

          {value: '临河区', label: '临河区',isLeaf: true},

          {value: '五原县', label: '五原县',isLeaf: true},

          {value: '磴口县', label: '磴口县',isLeaf: true},

          {value: '乌拉特前旗', label: '乌拉特前旗',isLeaf: true},

          {value: '乌拉特中旗', label: '乌拉特中旗',isLeaf: true},

          {value: '乌拉特后旗', label: '乌拉特后旗',isLeaf: true},

          {value: '杭锦后旗', label: '杭锦后旗',
            isLeaf: true}

        ]

      },

      {

        value: '乌兰察布市',

        label: '乌兰察布市',

        children: [

          {value: '集宁区', label: '集宁区',isLeaf: true},

          {value: '卓资县', label: '卓资县',isLeaf: true},

          {value: '化德县', label: '化德县',isLeaf: true},

          {value: '商都县', label: '商都县',isLeaf: true},

          {value: '兴和县', label: '兴和县',isLeaf: true},

          {value: '凉城县', label: '凉城县',isLeaf: true},

          {value: '察哈尔右翼前旗', label: '察哈尔右翼前旗',isLeaf: true},

          {value: '察哈尔右翼中旗', label: '察哈尔右翼中旗',isLeaf: true},

          {value: '察哈尔右翼后旗', label: '察哈尔右翼后旗',isLeaf: true},

          {value: '四子王旗', label: '四子王旗',isLeaf: true},

          {value: '丰镇市', label: '丰镇市',
            isLeaf: true}

        ]

      },

      {

        value: '兴安盟',

        label: '兴安盟',

        children: [

          {value: '乌兰浩特市', label: '乌兰浩特市',isLeaf: true},

          {value: '阿尔山市', label: '阿尔山市',isLeaf: true},

          {value: '科尔沁右翼前旗', label: '科尔沁右翼前旗',isLeaf: true},

          {value: '科尔沁右翼中旗', label: '科尔沁右翼中旗',isLeaf: true},

          {value: '扎赉特旗', label: '扎赉特旗',isLeaf: true},

          {value: '突泉县', label: '突泉县',
            isLeaf: true}

        ]

      },

      {

        value: '锡林郭勒盟',

        label: '锡林郭勒盟',

        children: [

          {value: '二连浩特市', label: '二连浩特市',isLeaf: true},

          {value: '锡林浩特市', label: '锡林浩特市',isLeaf: true},

          {value: '阿巴嘎旗', label: '阿巴嘎旗',isLeaf: true},

          {value: '苏尼特左旗', label: '苏尼特左旗',isLeaf: true},

          {value: '苏尼特右旗', label: '苏尼特右旗',isLeaf: true},

          {value: '东乌珠穆沁旗', label: '东乌珠穆沁旗',isLeaf: true},

          {value: '西乌珠穆沁旗', label: '西乌珠穆沁旗',isLeaf: true},

          {value: '太仆寺旗', label: '太仆寺旗',isLeaf: true},

          {value: '镶黄旗', label: '镶黄旗',isLeaf: true},

          {value: '正镶白旗', label: '正镶白旗',isLeaf: true},

          {value: '正蓝旗', label: '正蓝旗',isLeaf: true},

          {value: '多伦县', label: '多伦县',
            isLeaf: true}

        ]

      },

      {

        value: '阿拉善盟',

        label: '阿拉善盟',

        children: [

          {value: '阿拉善左旗', label: '阿拉善左旗',isLeaf: true},

          {value: '阿拉善右旗', label: '阿拉善右旗',isLeaf: true},

          {value: '额济纳旗', label: '额济纳旗',
            isLeaf: true}

        ]

      }

    ]

  },
  {

    value: '辽宁省',

    label: '辽宁省',

    children: [

      {

        value: '沈阳市',

        label: '沈阳市',

        children: [

          {value: '和平区', label: '和平区',isLeaf: true},

          {value: '沈河区', label: '沈河区',isLeaf: true},

          {value: '大东区', label: '大东区',isLeaf: true},

          {value: '皇姑区', label: '皇姑区',isLeaf: true},

          {value: '铁西区', label: '铁西区',isLeaf: true},

          {value: '苏家屯区', label: '苏家屯区',isLeaf: true},

          {value: '东陵区', label: '东陵区',isLeaf: true},

          {value: '沈北新区', label: '沈北新区',isLeaf: true},

          {value: '于洪区', label: '于洪区',isLeaf: true},

          {value: '辽中县', label: '辽中县',isLeaf: true},

          {value: '康平县', label: '康平县',isLeaf: true},

          {value: '法库县', label: '法库县',isLeaf: true},

          {value: '新民市', label: '新民市',
            isLeaf: true}

        ]

      },

      {

        value: '大连市',

        label: '大连市',

        children: [

          {value: '中山区', label: '中山区',isLeaf: true},

          {value: '西岗区', label: '西岗区',isLeaf: true},

          {value: '沙河口区', label: '沙河口区',isLeaf: true},

          {value: '甘井子区', label: '甘井子区',isLeaf: true},

          {value: '旅顺口区', label: '旅顺口区',isLeaf: true},

          {value: '金州区', label: '金州区',isLeaf: true},

          {value: '长海县', label: '长海县',isLeaf: true},

          {value: '瓦房店市', label: '瓦房店市',isLeaf: true},

          {value: '普兰店市', label: '普兰店市',isLeaf: true},

          {value: '庄河市', label: '庄河市',
            isLeaf: true}

        ]

      },

      {

        value: '鞍山市',

        label: '鞍山市',

        children: [

          {value: '铁东区', label: '铁东区',isLeaf: true},

          {value: '铁西区', label: '铁西区',isLeaf: true},

          {value: '立山区', label: '立山区',isLeaf: true},

          {value: '千山区', label: '千山区',isLeaf: true},

          {value: '台安县', label: '台安县',isLeaf: true},

          {value: '岫岩满族自治县', label: '岫岩满族自治县',isLeaf: true},

          {value: '海城市', label: '海城市',
            isLeaf: true}

        ]

      },

      {

        value: '抚顺市',

        label: '抚顺市',

        children: [

          {value: '新抚区', label: '新抚区',isLeaf: true},

          {value: '东洲区', label: '东洲区',isLeaf: true},

          {value: '望花区', label: '望花区',isLeaf: true},

          {value: '顺城区', label: '顺城区',isLeaf: true},

          {value: '抚顺县', label: '抚顺县',isLeaf: true},

          {value: '新宾满族自治县', label: '新宾满族自治县',isLeaf: true},

          {value: '清原满族自治县', label: '清原满族自治县',
            isLeaf: true}

        ]

      },

      {

        value: '本溪市',

        label: '本溪市',

        children: [

          {value: '平山区', label: '平山区',isLeaf: true},

          {value: '溪湖区', label: '溪湖区',isLeaf: true},

          {value: '明山区', label: '明山区',isLeaf: true},

          {value: '南芬区', label: '南芬区',isLeaf: true},

          {value: '本溪满族自治县', label: '本溪满族自治县',isLeaf: true},

          {value: '桓仁满族自治县', label: '桓仁满族自治县',
            isLeaf: true}

        ]

      },

      {

        value: '丹东市',

        label: '丹东市',

        children: [

          {value: '元宝区', label: '元宝区',isLeaf: true},

          {value: '振兴区', label: '振兴区',isLeaf: true},

          {value: '振安区', label: '振安区',isLeaf: true},

          {value: '宽甸满族自治县', label: '宽甸满族自治县',isLeaf: true},

          {value: '东港市', label: '东港市',isLeaf: true},

          {value: '凤城市', label: '凤城市',
            isLeaf: true}

        ]

      },

      {

        value: '锦州市',

        label: '锦州市',

        children: [

          {value: '古塔区', label: '古塔区',isLeaf: true},

          {value: '凌河区', label: '凌河区',isLeaf: true},

          {value: '太和区', label: '太和区',isLeaf: true},

          {value: '黑山县', label: '黑山县',isLeaf: true},

          {value: '义县', label: '义县',isLeaf: true},

          {value: '凌海市', label: '凌海市',isLeaf: true},

          {value: '北镇市', label: '北镇市',
            isLeaf: true}

        ]

      },

      {

        value: '营口市',

        label: '营口市',

        children: [

          {value: '站前区', label: '站前区',isLeaf: true},

          {value: '西市区', label: '西市区',isLeaf: true},

          {value: '鲅鱼圈区', label: '鲅鱼圈区',isLeaf: true},

          {value: '老边区', label: '老边区',isLeaf: true},

          {value: '盖州市', label: '盖州市',isLeaf: true},

          {value: '大石桥市', label: '大石桥市',
            isLeaf: true}

        ]

      },

      {

        value: '阜新市',

        label: '阜新市',

        children: [

          {value: '海州区', label: '海州区',isLeaf: true},

          {value: '新邱区', label: '新邱区',isLeaf: true},

          {value: '太平区', label: '太平区',isLeaf: true},

          {value: '清河门区', label: '清河门区',isLeaf: true},

          {value: '细河区', label: '细河区',isLeaf: true},

          {value: '阜新蒙古族自治县', label: '阜新蒙古族自治县',isLeaf: true},

          {value: '彰武县', label: '彰武县',
            isLeaf: true}

        ]

      },

      {

        value: '辽阳市',

        label: '辽阳市',

        children: [

          {value: '白塔区', label: '白塔区',isLeaf: true},

          {value: '文圣区', label: '文圣区',isLeaf: true},

          {value: '宏伟区', label: '宏伟区',isLeaf: true},

          {value: '弓长岭区', label: '弓长岭区',isLeaf: true},

          {value: '太子河区', label: '太子河区',isLeaf: true},

          {value: '辽阳县', label: '辽阳县',isLeaf: true},

          {value: '灯塔市', label: '灯塔市',
            isLeaf: true}

        ]

      },

      {

        value: '盘锦市',

        label: '盘锦市',

        children: [

          {value: '双台子区', label: '双台子区',isLeaf: true},

          {value: '兴隆台区', label: '兴隆台区',isLeaf: true},

          {value: '大洼县', label: '大洼县',isLeaf: true},

          {value: '盘山县', label: '盘山县',
            isLeaf: true}

        ]

      },

      {

        value: '铁岭市',

        label: '铁岭市',

        children: [

          {value: '银州区', label: '银州区',isLeaf: true},

          {value: '清河区', label: '清河区',isLeaf: true},

          {value: '铁岭县', label: '铁岭县',isLeaf: true},

          {value: '西丰县', label: '西丰县',isLeaf: true},

          {value: '昌图县', label: '昌图县',isLeaf: true},

          {value: '调兵山市', label: '调兵山市',isLeaf: true},

          {value: '开原市', label: '开原市',
            isLeaf: true}

        ]

      },

      {

        value: '朝阳市',

        label: '朝阳市',

        children: [

          {value: '双塔区', label: '双塔区',isLeaf: true},

          {value: '龙城区', label: '龙城区',isLeaf: true},

          {value: '朝阳县', label: '朝阳县',isLeaf: true},

          {value: '建平县', label: '建平县',isLeaf: true},

          {value: '喀喇沁左翼蒙古族自治县', label: '喀喇沁左翼蒙古族自治县',isLeaf: true},

          {value: '北票市', label: '北票市',isLeaf: true},

          {value: '凌源市', label: '凌源市',
            isLeaf: true}

        ]

      },

      {

        value: '葫芦岛市',

        label: '葫芦岛市',

        children: [

          {value: '连山区', label: '连山区',isLeaf: true},

          {value: '龙港区', label: '龙港区',isLeaf: true},

          {value: '南票区', label: '南票区',isLeaf: true},

          {value: '绥中县', label: '绥中县',isLeaf: true},

          {value: '建昌县', label: '建昌县',isLeaf: true},

          {value: '兴城市', label: '兴城市',
            isLeaf: true}

        ]

      }

    ]

  },
  {

    value: '吉林省',

    label: '吉林省',

    children: [

      {

        value: '长春市',

        label: '长春市',

        children: [

          {value: '南关区', label: '南关区',isLeaf: true},

          {value: '宽城区', label: '宽城区',isLeaf: true},

          {value: '朝阳区', label: '朝阳区',isLeaf: true},

          {value: '二道区', label: '二道区',isLeaf: true},

          {value: '绿园区', label: '绿园区',isLeaf: true},

          {value: '双阳区', label: '双阳区',isLeaf: true},

          {value: '农安县', label: '农安县',isLeaf: true},

          {value: '九台市', label: '九台市',isLeaf: true},

          {value: '榆树市', label: '榆树市',isLeaf: true},

          {value: '德惠市', label: '德惠市',
            isLeaf: true}

        ]

      },

      {

        value: '吉林市',

        label: '吉林市',

        children: [

          {value: '昌邑区', label: '昌邑区',isLeaf: true},

          {value: '龙潭区', label: '龙潭区',isLeaf: true},

          {value: '船营区', label: '船营区',isLeaf: true},

          {value: '丰满区', label: '丰满区',isLeaf: true},

          {value: '永吉县', label: '永吉县',isLeaf: true},

          {value: '蛟河市', label: '蛟河市',isLeaf: true},

          {value: '桦甸市', label: '桦甸市',isLeaf: true},

          {value: '舒兰市', label: '舒兰市',isLeaf: true},

          {value: '磐石市', label: '磐石市',
            isLeaf: true}

        ]

      },

      {

        value: '四平市',

        label: '四平市',

        children: [

          {value: '铁西区', label: '铁西区',isLeaf: true},

          {value: '铁东区', label: '铁东区',isLeaf: true},

          {value: '梨树县', label: '梨树县',isLeaf: true},

          {value: '伊通满族自治县', label: '伊通满族自治县',isLeaf: true},

          {value: '公主岭市', label: '公主岭市',isLeaf: true},

          {value: '双辽市', label: '双辽市',
            isLeaf: true}

        ]

      },

      {

        value: '辽源市',

        label: '辽源市',

        children: [

          {value: '龙山区', label: '龙山区',isLeaf: true},

          {value: '西安区', label: '西安区',isLeaf: true},

          {value: '东丰县', label: '东丰县',isLeaf: true},

          {value: '东辽县', label: '东辽县',
            isLeaf: true}

        ]

      },

      {

        value: '通化市',

        label: '通化市',

        children: [

          {value: '东昌区', label: '东昌区',isLeaf: true},

          {value: '二道江区', label: '二道江区',isLeaf: true},

          {value: '通化县', label: '通化县',isLeaf: true},

          {value: '辉南县', label: '辉南县',isLeaf: true},

          {value: '柳河县', label: '柳河县',isLeaf: true},

          {value: '梅河口市', label: '梅河口市',isLeaf: true},

          {value: '集安市', label: '集安市',
            isLeaf: true}

        ]

      },

      {

        value: '白山市',

        label: '白山市',

        children: [

          {value: '八道江区', label: '八道江区',isLeaf: true},

          {value: '江源区', label: '江源区',isLeaf: true},

          {value: '抚松县', label: '抚松县',isLeaf: true},

          {value: '靖宇县', label: '靖宇县',isLeaf: true},

          {value: '长白朝鲜族自治县', label: '长白朝鲜族自治县',isLeaf: true},

          {value: '临江市', label: '临江市',
            isLeaf: true}

        ]

      },

      {

        value: '松原市',

        label: '松原市',

        children: [

          {value: '宁江区', label: '宁江区',isLeaf: true},

          {value: '前郭尔罗斯蒙古族自治县', label: '前郭尔罗斯蒙古族自治县',isLeaf: true},

          {value: '长岭县', label: '长岭县',isLeaf: true},

          {value: '乾安县', label: '乾安县',isLeaf: true},

          {value: '扶余县', label: '扶余县',
            isLeaf: true}

        ]

      },

      {

        value: '白城市',

        label: '白城市',

        children: [

          {value: '洮北区', label: '洮北区',isLeaf: true},

          {value: '镇赉县', label: '镇赉县',isLeaf: true},

          {value: '通榆县', label: '通榆县',isLeaf: true},

          {value: '洮南市', label: '洮南市',isLeaf: true},

          {value: '大安市', label: '大安市',
            isLeaf: true}

        ]

      },

      {

        value: '延边朝鲜族自治州',

        label: '延边朝鲜族自治州',

        children: [

          {value: '延吉市', label: '延吉市',isLeaf: true},

          {value: '图们市', label: '图们市',isLeaf: true},

          {value: '敦化市', label: '敦化市',isLeaf: true},

          {value: '珲春市', label: '珲春市',isLeaf: true},

          {value: '龙井市', label: '龙井市',isLeaf: true},

          {value: '和龙市', label: '和龙市',isLeaf: true},

          {value: '汪清县', label: '汪清县',isLeaf: true},

          {value: '安图县', label: '安图县',
            isLeaf: true}

        ]

      }

    ]

  },
  {

    value: '黑龙江省',

    label: '黑龙江省',

    children: [

      {

        value: '哈尔滨市',

        label: '哈尔滨市',

        children: [

          {value: '道里区', label: '道里区',isLeaf: true},

          {value: '南岗区', label: '南岗区',isLeaf: true},

          {value: '道外区', label: '道外区',isLeaf: true},

          {value: '平房区', label: '平房区',isLeaf: true},

          {value: '松北区', label: '松北区',isLeaf: true},

          {value: '香坊区', label: '香坊区',isLeaf: true},

          {value: '呼兰区', label: '呼兰区',isLeaf: true},

          {value: '阿城区', label: '阿城区',isLeaf: true},

          {value: '依兰县', label: '依兰县',isLeaf: true},

          {value: '方正县', label: '方正县',isLeaf: true},

          {value: '宾县', label: '宾县',isLeaf: true},

          {value: '巴彦县', label: '巴彦县',isLeaf: true},

          {value: '木兰县', label: '木兰县',isLeaf: true},

          {value: '通河县', label: '通河县',isLeaf: true},

          {value: '延寿县', label: '延寿县',isLeaf: true},

          {value: '双城市', label: '双城市',isLeaf: true},

          {value: '尚志市', label: '尚志市',isLeaf: true},

          {value: '五常市', label: '五常市',
            isLeaf: true}

        ]

      },

      {

        value: '齐齐哈尔市',

        label: '齐齐哈尔市',

        children: [

          {value: '龙沙区', label: '龙沙区',isLeaf: true},

          {value: '建华区', label: '建华区',isLeaf: true},

          {value: '铁锋区', label: '铁锋区',isLeaf: true},

          {value: '昂昂溪区', label: '昂昂溪区',isLeaf: true},

          {value: '富拉尔基区', label: '富拉尔基区',isLeaf: true},

          {value: '碾子山区', label: '碾子山区',isLeaf: true},

          {value: '梅里斯达斡尔族区', label: '梅里斯达斡尔族区',isLeaf: true},

          {value: '龙江县', label: '龙江县',isLeaf: true},

          {value: '依安县', label: '依安县',isLeaf: true},

          {value: '泰来县', label: '泰来县',isLeaf: true},

          {value: '甘南县', label: '甘南县',isLeaf: true},

          {value: '富裕县', label: '富裕县',isLeaf: true},

          {value: '克山县', label: '克山县',isLeaf: true},

          {value: '克东县', label: '克东县',isLeaf: true},

          {value: '拜泉县', label: '拜泉县',isLeaf: true},

          {value: '讷河市', label: '讷河市',
            isLeaf: true}

        ]

      },

      {

        value: '鸡西市',

        label: '鸡西市',

        children: [

          {value: '鸡冠区', label: '鸡冠区',isLeaf: true},

          {value: '恒山区', label: '恒山区',isLeaf: true},

          {value: '滴道区', label: '滴道区',isLeaf: true},

          {value: '梨树区', label: '梨树区',isLeaf: true},

          {value: '城子河区', label: '城子河区',isLeaf: true},

          {value: '麻山区', label: '麻山区',isLeaf: true},

          {value: '鸡东县', label: '鸡东县',isLeaf: true},

          {value: '虎林市', label: '虎林市',isLeaf: true},

          {value: '密山市', label: '密山市',
            isLeaf: true}

        ]

      },

      {

        value: '鹤岗市',

        label: '鹤岗市',

        children: [

          {value: '向阳区', label: '向阳区',isLeaf: true},

          {value: '工农区', label: '工农区',isLeaf: true},

          {value: '南山区', label: '南山区',isLeaf: true},

          {value: '兴安区', label: '兴安区',isLeaf: true},

          {value: '东山区', label: '东山区',isLeaf: true},

          {value: '兴山区', label: '兴山区',isLeaf: true},

          {value: '萝北县', label: '萝北县',isLeaf: true},

          {value: '绥滨县', label: '绥滨县',
            isLeaf: true}

        ]

      },

      {

        value: '双鸭山市',

        label: '双鸭山市',

        children: [

          {value: '尖山区', label: '尖山区',isLeaf: true},

          {value: '岭东区', label: '岭东区',isLeaf: true},

          {value: '四方台区', label: '四方台区',isLeaf: true},

          {value: '宝山区', label: '宝山区',isLeaf: true},

          {value: '集贤县', label: '集贤县',isLeaf: true},

          {value: '友谊县', label: '友谊县',isLeaf: true},

          {value: '宝清县', label: '宝清县',isLeaf: true},

          {value: '饶河县', label: '饶河县',
            isLeaf: true}

        ]

      },

      {

        value: '大庆市',

        label: '大庆市',

        children: [

          {value: '萨尔图区', label: '萨尔图区',isLeaf: true},

          {value: '龙凤区', label: '龙凤区',isLeaf: true},

          {value: '让胡路区', label: '让胡路区',isLeaf: true},

          {value: '红岗区', label: '红岗区',isLeaf: true},

          {value: '大同区', label: '大同区',isLeaf: true},

          {value: '肇州县', label: '肇州县',isLeaf: true},

          {value: '肇源县', label: '肇源县',isLeaf: true},

          {value: '林甸县', label: '林甸县',isLeaf: true},

          {value: '杜尔伯特蒙古族自治县', label: '杜尔伯特蒙古族自治县',
            isLeaf: true}

        ]

      },

      {

        value: '伊春市',

        label: '伊春市',

        children: [

          {value: '伊春区', label: '伊春区',isLeaf: true},

          {value: '南岔区', label: '南岔区',isLeaf: true},

          {value: '友好区', label: '友好区',isLeaf: true},

          {value: '西林区', label: '西林区',isLeaf: true},

          {value: '翠峦区', label: '翠峦区',isLeaf: true},

          {value: '新青区', label: '新青区',isLeaf: true},

          {value: '美溪区', label: '美溪区',isLeaf: true},

          {value: '金山屯区', label: '金山屯区',isLeaf: true},

          {value: '五营区', label: '五营区',isLeaf: true},

          {value: '乌马河区', label: '乌马河区',isLeaf: true},

          {value: '汤旺河区', label: '汤旺河区',isLeaf: true},

          {value: '带岭区', label: '带岭区',isLeaf: true},

          {value: '乌伊岭区', label: '乌伊岭区',isLeaf: true},

          {value: '红星区', label: '红星区',isLeaf: true},

          {value: '上甘岭区', label: '上甘岭区',isLeaf: true},

          {value: '嘉荫县', label: '嘉荫县',isLeaf: true},

          {value: '铁力市', label: '铁力市',
            isLeaf: true}

        ]

      },

      {

        value: '佳木斯市',

        label: '佳木斯市',

        children: [

          {value: '向阳区', label: '向阳区',isLeaf: true},

          {value: '前进区', label: '前进区',isLeaf: true},

          {value: '东风区', label: '东风区',isLeaf: true},

          {value: '郊区', label: '郊区',isLeaf: true},

          {value: '桦南县', label: '桦南县',isLeaf: true},

          {value: '桦川县', label: '桦川县',isLeaf: true},

          {value: '汤原县', label: '汤原县',isLeaf: true},

          {value: '抚远县', label: '抚远县',isLeaf: true},

          {value: '同江市', label: '同江市',isLeaf: true},

          {value: '富锦市', label: '富锦市',
            isLeaf: true}

        ]

      },

      {

        value: '七台河市',

        label: '七台河市',

        children: [

          {value: '新兴区', label: '新兴区',isLeaf: true},

          {value: '桃山区', label: '桃山区',isLeaf: true},

          {value: '茄子河区', label: '茄子河区',isLeaf: true},

          {value: '勃利县', label: '勃利县',
            isLeaf: true}

        ]

      },

      {

        value: '牡丹江市',

        label: '牡丹江市',

        children: [

          {value: '东安区', label: '东安区',isLeaf: true},

          {value: '阳明区', label: '阳明区',isLeaf: true},

          {value: '爱民区', label: '爱民区',isLeaf: true},

          {value: '西安区', label: '西安区',isLeaf: true},

          {value: '东宁县', label: '东宁县',isLeaf: true},

          {value: '林口县', label: '林口县',isLeaf: true},

          {value: '绥芬河市', label: '绥芬河市',isLeaf: true},

          {value: '海林市', label: '海林市',isLeaf: true},

          {value: '宁安市', label: '宁安市',isLeaf: true},

          {value: '穆棱市', label: '穆棱市',
            isLeaf: true}

        ]

      },

      {

        value: '黑河市',

        label: '黑河市',

        children: [

          {value: '爱辉区', label: '爱辉区',isLeaf: true},

          {value: '嫩江县', label: '嫩江县',isLeaf: true},

          {value: '逊克县', label: '逊克县',isLeaf: true},

          {value: '孙吴县', label: '孙吴县',isLeaf: true},

          {value: '北安市', label: '北安市',isLeaf: true},

          {value: '五大连池市', label: '五大连池市',
            isLeaf: true}

        ]

      },

      {

        value: '绥化市',

        label: '绥化市',

        children: [

          {value: '北林区', label: '北林区',isLeaf: true},

          {value: '望奎县', label: '望奎县',isLeaf: true},

          {value: '兰西县', label: '兰西县',isLeaf: true},

          {value: '青冈县', label: '青冈县',isLeaf: true},

          {value: '庆安县', label: '庆安县',isLeaf: true},

          {value: '明水县', label: '明水县',isLeaf: true},

          {value: '绥棱县', label: '绥棱县',isLeaf: true},

          {value: '安达市', label: '安达市',isLeaf: true},

          {value: '肇东市', label: '肇东市',isLeaf: true},

          {value: '海伦市', label: '海伦市',
            isLeaf: true}

        ]

      },

      {

        value: '大兴安岭地区',

        label: '大兴安岭地区',

        children: [

          {value: '加格达奇区', label: '加格达奇区',isLeaf: true},

          {value: '松岭区', label: '松岭区',isLeaf: true},

          {value: '新林区', label: '新林区',isLeaf: true},

          {value: '呼中区', label: '呼中区',isLeaf: true},

          {value: '呼玛县', label: '呼玛县',isLeaf: true},

          {value: '塔河县', label: '塔河县',isLeaf: true},

          {value: '漠河县', label: '漠河县',
            isLeaf: true}

        ]

      }

    ]

  },
  {

    value: '上海市',

    label: '上海市',

    children: [

      {

        value: '上海',

        label: '上海',

        children: [

          {value: '黄浦区', label: '黄浦区',isLeaf: true},

          {value: '卢湾区', label: '卢湾区',isLeaf: true},

          {value: '徐汇区', label: '徐汇区',isLeaf: true},

          {value: '长宁区', label: '长宁区',isLeaf: true},

          {value: '静安区', label: '静安区',isLeaf: true},

          {value: '普陀区', label: '普陀区',isLeaf: true},

          {value: '闸北区', label: '闸北区',isLeaf: true},

          {value: '虹口区', label: '虹口区',isLeaf: true},

          {value: '杨浦区', label: '杨浦区',isLeaf: true},

          {value: '闵行区', label: '闵行区',isLeaf: true},

          {value: '宝山区', label: '宝山区',isLeaf: true},

          {value: '嘉定区', label: '嘉定区',isLeaf: true},

          {value: '浦东新区', label: '浦东新区',isLeaf: true},

          {value: '金山区', label: '金山区',isLeaf: true},

          {value: '松江区', label: '松江区',isLeaf: true},

          {value: '青浦区', label: '青浦区',isLeaf: true},

          {value: '南汇区', label: '南汇区',isLeaf: true},

          {value: '奉贤区', label: '奉贤区',isLeaf: true},

          {value: '崇明县', label: '崇明县',
            isLeaf: true}

        ]

      }

    ]

  }
  ];

@Component({
  selector: 'app-chinacity',
  templateUrl: './chinacity.component.html',
  styleUrls: ['./chinacity.component.scss']
})
export class ChinacityComponent implements OnInit {

  /** init data */
  nzOptions = options;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  private createForm(): void {
    this.form = this.fb.group({
      name: [ null, Validators.required ]
    });
  }
  public onChanges(values: any): void {
    console.log(values);
  }
  ngOnInit() {

  }

}
