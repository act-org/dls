"use strict";(self.webpackChunk_actinc_dls=self.webpackChunk_actinc_dls||[]).push([[3469],{"./src/components/SCFMap/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Default:()=>Default,SelectedSCF:()=>SelectedSCF,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var playground=__webpack_require__("./src/helpers/playground.ts"),range=__webpack_require__("./node_modules/d3-array/src/range.js"),quantile=__webpack_require__("./node_modules/d3-scale/src/quantile.js");const defaultData=[{QUANTITY:80,SCF_CODE:148,SCF_NAME:"NY - 148",STATE_CODE:"NY"},{QUANTITY:130,SCF_CODE:157,SCF_NAME:"PA - 157",STATE_CODE:"PA"},{QUANTITY:185,SCF_CODE:287,SCF_NAME:"NC - 287",STATE_CODE:"NC"},{QUANTITY:200,SCF_CODE:286,SCF_NAME:"NC - 286",STATE_CODE:"NC"},{QUANTITY:30,SCF_CODE:295,SCF_NAME:"SC - 295",STATE_CODE:"SC"},{QUANTITY:800,SCF_CODE:96,SCF_NAME:"AE - 096",STATE_CODE:"AE"},{QUANTITY:500,SCF_CODE:148,SCF_NAME:"NY - 148",STATE_CODE:"NY"}],defaultProcessDataFn=featureCollection=>{const{features}=featureCollection,scale=(0,quantile.A)().domain(defaultData.map((item=>item.QUANTITY))).range((0,range.A)(10)),mappedFeatures=defaultData.reduce(((acc,{QUANTITY,SCF_CODE,STATE_CODE})=>(acc[SCF_CODE]={quantity:QUANTITY,stateCode:STATE_CODE},acc)),{});return{features:features.map((f=>{if(f.properties?.id&&mappedFeatures[f.properties.id]){const quantity=f.properties?.id&&mappedFeatures[f.properties.id]?scale(mappedFeatures[f.properties.id].quantity):0,properties={...f.properties,quantity,stateCode:mappedFeatures[f.properties.id].stateCode,value:f.properties?.id&&mappedFeatures[f.properties.id]?mappedFeatures[f.properties.id].quantity:0};return{...f,properties}}return{...f}})),type:"FeatureCollection"}};try{defaultProcessDataFn.displayName="defaultProcessDataFn",defaultProcessDataFn.__docgenInfo={description:"",displayName:"defaultProcessDataFn",props:{type:{defaultValue:null,description:"Specifies the type of GeoJSON object.",name:"type",required:!0,type:{name:'"FeatureCollection"'}},features:{defaultValue:null,description:"",name:"features",required:!0,type:{name:"Feature<Geometry, GeoJsonProperties>[]"}},bbox:{defaultValue:null,description:"Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.\nThe value of the bbox member is an array of length 2*n where n is the number of dimensions\nrepresented in the contained geometries, with all axes of the most southwesterly point\nfollowed by all axes of the more northeasterly point.\nThe axes order of a bbox follows the axes order of geometries.\nhttps://tools.ietf.org/html/rfc7946#section-5",name:"bbox",required:!1,type:{name:"BBox"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SCFMap/mocks.tsx#defaultProcessDataFn"]={docgenInfo:defaultProcessDataFn.__docgenInfo,name:"defaultProcessDataFn",path:"src/components/SCFMap/mocks.tsx#defaultProcessDataFn"})}catch(__react_docgen_typescript_loader_error){}var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),esm=__webpack_require__("./node_modules/@turf/bbox/dist/esm/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),numeral=__webpack_require__("./node_modules/numeral/numeral.js"),numeral_default=__webpack_require__.n(numeral),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),Map=__webpack_require__("./src/components/Map/index.tsx"),MapPopup=__webpack_require__("./src/components/MapPopup/index.tsx");const SCFMap=({data,geoJSONPath,mapboxAccessToken,mapPopupProps,mapProps,onHoverInfo,processDataFn,selectedSCF,setOnHoverInfo,tooltipElement})=>{const{breakpoints,spacing}=(0,useTheme.A)(),[scfsJSON,setSCFsJSON]=react_default().useState(),[hoverInfo,setHoverInfo]=react_default().useState(),finalHoverInfo=onHoverInfo||hoverInfo;react_default().useEffect((()=>{fetch(geoJSONPath).then((resp=>resp.json())).then((json=>setSCFsJSON(json))).catch((err=>console.error("Could not load data",err)))}),[]);const processedData=react_default().useMemo((()=>scfsJSON&&processDataFn&&processDataFn(scfsJSON,data)),[data,scfsJSON,processDataFn]),initialBoundsPosition=react_default().useMemo((()=>{if(selectedSCF&&processedData){const features=processedData.features.filter((f=>selectedSCF.includes(f.id)));if(features.length>0){const[minLng,minLat,maxLng,maxLat]=(0,esm.A)({features,type:"FeatureCollection"});return{id:features.length>1?void 0:selectedSCF[0],position:[[minLng,minLat],[maxLng,maxLat]]}}}}),[processedData,selectedSCF]);if(!processedData)return react_default().createElement(react_default().Fragment,null);const parentHeight=mapProps?.height||450,parentWidth=mapProps?.width||"100%";return react_default().createElement(Map.A,{data:processedData,height:parentHeight,initialBoundsPosition,mapboxAccessToken,setHoverInfo:setOnHoverInfo||setHoverInfo,width:parentWidth,...mapProps},tooltipElement||(finalHoverInfo&&((0,lodash.isString)(parentWidth)||parentWidth>breakpoints.values.sm-parseInt(spacing(12),10))?react_default().createElement(MapPopup.A,{popupProps:{latitude:finalHoverInfo.lat,longitude:finalHoverInfo.lng},rows:[{title:"SCF Code",value:finalHoverInfo.feature.properties?.name},{title:"Volume",value:numeral_default()(finalHoverInfo.feature.properties?.value).format("0,0")}],...mapPopupProps}):void 0))};try{SCFMap.displayName="SCFMap",SCFMap.__docgenInfo={description:"SCFMap component which under the hood uses mapbox and react-map-gl. For this to work it's necessary\nto add the link bellow in the head of your page: <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />\nFor more information: https://visgl.github.io/react-map-gl/docs/get-started/get-started#styling",displayName:"SCFMap",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IMapDataProps[]"}},geoJSONPath:{defaultValue:null,description:"",name:"geoJSONPath",required:!0,type:{name:"string"}},mapboxAccessToken:{defaultValue:null,description:"",name:"mapboxAccessToken",required:!0,type:{name:"string"}},mapPopupProps:{defaultValue:null,description:"",name:"mapPopupProps",required:!1,type:{name:"Partial<MapPopupProps>"}},mapProps:{defaultValue:null,description:"",name:"mapProps",required:!1,type:{name:'Omit<Partial<MapProps>, "mapboxAccessToken">'}},onHoverInfo:{defaultValue:null,description:"",name:"onHoverInfo",required:!1,type:{name:"FeatureHoverProps"}},processDataFn:{defaultValue:null,description:"",name:"processDataFn",required:!1,type:{name:"((featureCollection: FeatureCollection<Geometry, GeoJsonProperties>, data: IMapDataProps[]) => FeatureCollection<Geometry, GeoJsonProperties>)"}},selectedSCF:{defaultValue:null,description:"",name:"selectedSCF",required:!1,type:{name:"string[]"}},setOnHoverInfo:{defaultValue:null,description:"",name:"setOnHoverInfo",required:!1,type:{name:"((newHoverInfo: FeatureHoverProps) => void)"}},tooltipElement:{defaultValue:null,description:"",name:"tooltipElement",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SCFMap/index.tsx#SCFMap"]={docgenInfo:SCFMap.__docgenInfo,name:"SCFMap",path:"src/components/SCFMap/index.tsx#SCFMap"})}catch(__react_docgen_typescript_loader_error){}const index_stories={args:{data:defaultData,geoJSONPath:"maps/scf.json",mapboxAccessToken:"pk.eyJ1IjoiaXRhZG1pbnMiLCJhIjoiY2wwdmVudmhpMTZvNjNqcG40NXp6Nnk3dCJ9.ThRd0y_bK_8RVfu_zDzTjQ",processDataFn:defaultProcessDataFn},argTypes:(0,playground.Q)({},SCFMap),component:SCFMap,tags:["autodocs"],title:"Molecules / Maps / SCFMap"},Default={},CustomColor={args:{mapProps:{color:"#FF0000"}}},SelectedSCF={args:{data:defaultData,geoJSONPath:"maps/scf.json",processDataFn:defaultProcessDataFn,selectedSCF:["157"]}},__namedExportsOrder=["Default","CustomColor","SelectedSCF"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    mapProps: {\n      color: '#FF0000'\n    }\n  }\n}",...CustomColor.parameters?.docs?.source}}},SelectedSCF.parameters={...SelectedSCF.parameters,docs:{...SelectedSCF.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: defaultData,\n    geoJSONPath: 'maps/scf.json',\n    processDataFn: defaultProcessDataFn,\n    selectedSCF: ['157']\n  }\n}",...SelectedSCF.parameters?.docs?.source}}}}}]);