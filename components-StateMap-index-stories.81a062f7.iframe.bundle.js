"use strict";(self.webpackChunk_actinc_dls=self.webpackChunk_actinc_dls||[]).push([[8260],{"./src/components/StateMap/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Default:()=>Default,MultipleSelectedStates:()=>MultipleSelectedStates,SelectedState:()=>SelectedState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var playground=__webpack_require__("./src/helpers/playground.ts"),range=__webpack_require__("./node_modules/d3-array/src/range.js"),quantile=__webpack_require__("./node_modules/d3-scale/src/quantile.js");const defaultData=[{CONVERSION_QUANTITY:0,QUANTITY:80,STATE_CODE:"TN",STATE_NAME:"Tennessee"},{CONVERSION_QUANTITY:0,QUANTITY:130,STATE_CODE:"MD",STATE_NAME:"Maryland"},{CONVERSION_QUANTITY:0,QUANTITY:185,STATE_CODE:"KY",STATE_NAME:"Kentucky"},{CONVERSION_QUANTITY:0,QUANTITY:200,STATE_CODE:"AL",STATE_NAME:"Alabama"},{CONVERSION_QUANTITY:0,QUANTITY:30,STATE_CODE:"SC",STATE_NAME:"South Carolina"},{CONVERSION_QUANTITY:0,QUANTITY:800,STATE_CODE:"FL",STATE_NAME:"Florida"},{CONVERSION_QUANTITY:0,QUANTITY:500,STATE_CODE:"TX",STATE_NAME:"Texas"}],defaultProcessDataFn=(featureCollection,data)=>{const{features}=featureCollection,scale=(0,quantile.A)().domain(data.map((item=>item.QUANTITY))).range((0,range.A)(10)),mappedFeatures=data.reduce(((acc,{QUANTITY,STATE_NAME,STATE_CODE})=>(acc[STATE_NAME]={quantity:QUANTITY,stateCode:STATE_CODE},acc)),{});return{features:features.map((f=>{if(f.properties?.name&&mappedFeatures[f.properties.name]){const quantity=f.properties?.name&&mappedFeatures[f.properties.name]?scale(mappedFeatures[f.properties.name].quantity):0,properties={...f.properties,quantity,stateCode:mappedFeatures[f.properties.name].stateCode,value:f.properties?.name&&mappedFeatures[f.properties.name]?mappedFeatures[f.properties.name].quantity:0};return{...f,properties}}return{...f}})),type:"FeatureCollection"}};var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),esm=__webpack_require__("./node_modules/@turf/bbox/dist/esm/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),numeral=__webpack_require__("./node_modules/numeral/numeral.js"),numeral_default=__webpack_require__.n(numeral),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),Map=__webpack_require__("./src/components/Map/index.tsx"),MapPopup=__webpack_require__("./src/components/MapPopup/index.tsx");const StateMap=({data,geoJSONPath,mapboxAccessToken,mapPopupProps,mapProps,onHoverInfo,processDataFn,selectedState,setOnHoverInfo,tooltipElement})=>{const{breakpoints,spacing}=(0,useTheme.A)(),[statesJSON,setStatesJSON]=react_default().useState(),[hoverInfo,setHoverInfo]=react_default().useState(),finalHoverInfo=onHoverInfo||hoverInfo;react_default().useEffect((()=>{fetch(geoJSONPath).then((resp=>resp.json())).then((json=>setStatesJSON(json))).catch((err=>console.error("Could not load data",err)))}),[]);const processedData=react_default().useMemo((()=>statesJSON&&processDataFn&&processDataFn(statesJSON,data)),[data,statesJSON,processDataFn]),initialBoundsPosition=react_default().useMemo((()=>{if(selectedState&&processedData){const features=processedData.features.filter((f=>selectedState.includes(f.id)));if(features.length>0){const[minLng,minLat,maxLng,maxLat]=(0,esm.A)({features,type:"FeatureCollection"});return{id:features.length>1?void 0:selectedState[0],position:[[minLng,minLat],[maxLng,maxLat]]}}}}),[processedData,selectedState]);if(!processedData)return react_default().createElement(react_default().Fragment,null);const parentHeight=mapProps?.height||450,parentWidth=mapProps?.width||"100%";return react_default().createElement(Map.A,{data:processedData,height:parentHeight,initialBoundsPosition,mapboxAccessToken,setHoverInfo:setOnHoverInfo||setHoverInfo,width:parentWidth,...mapProps},tooltipElement||(finalHoverInfo&&((0,lodash.isString)(parentWidth)||parentWidth>breakpoints.values.sm-parseInt(spacing(12),10))?react_default().createElement(MapPopup.A,{popupProps:{latitude:finalHoverInfo.lat,longitude:finalHoverInfo.lng},rows:[{title:"State",value:finalHoverInfo.feature.properties?.name},{title:"Code",value:finalHoverInfo.feature.properties?.abbr},{title:"Volume",value:numeral_default()(finalHoverInfo.feature.properties?.value).format("0,0")}],...mapPopupProps}):void 0))};try{StateMap.displayName="StateMap",StateMap.__docgenInfo={description:"StateMap component which under the hood uses mapbox and react-map-gl. For this to work it's necessary\nto add the link bellow in the head of your page: <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />\nFor more information: https://visgl.github.io/react-map-gl/docs/get-started/get-started#styling",displayName:"StateMap",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IMapDataProps[]"}},geoJSONPath:{defaultValue:null,description:"",name:"geoJSONPath",required:!0,type:{name:"string"}},mapboxAccessToken:{defaultValue:null,description:"",name:"mapboxAccessToken",required:!0,type:{name:"string"}},mapPopupProps:{defaultValue:null,description:"",name:"mapPopupProps",required:!1,type:{name:"Partial<MapPopupProps>"}},mapProps:{defaultValue:null,description:"",name:"mapProps",required:!1,type:{name:'Omit<Partial<MapProps>, "mapboxAccessToken">'}},onHoverInfo:{defaultValue:null,description:"",name:"onHoverInfo",required:!1,type:{name:"FeatureHoverProps"}},processDataFn:{defaultValue:null,description:"",name:"processDataFn",required:!1,type:{name:"((featureCollection: FeatureCollection<Geometry, GeoJsonProperties>, data: IMapDataProps[]) => FeatureCollection<Geometry, GeoJsonProperties>)"}},selectedState:{defaultValue:null,description:"",name:"selectedState",required:!1,type:{name:"string[]"}},setOnHoverInfo:{defaultValue:null,description:"",name:"setOnHoverInfo",required:!1,type:{name:"((newHoverInfo: FeatureHoverProps) => void)"}},tooltipElement:{defaultValue:null,description:"",name:"tooltipElement",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StateMap/index.tsx#StateMap"]={docgenInfo:StateMap.__docgenInfo,name:"StateMap",path:"src/components/StateMap/index.tsx#StateMap"})}catch(__react_docgen_typescript_loader_error){}const index_stories={args:{data:defaultData,geoJSONPath:"maps/states.json",mapboxAccessToken:"pk.eyJ1IjoiaXRhZG1pbnMiLCJhIjoiY2wwdmVudmhpMTZvNjNqcG40NXp6Nnk3dCJ9.ThRd0y_bK_8RVfu_zDzTjQ",processDataFn:defaultProcessDataFn},argTypes:(0,playground.Q)({},StateMap),component:StateMap,tags:["autodocs"],title:"Molecules / Maps / StateMap"},Default={},CustomColor={args:{mapProps:{color:"#FF0000"}}},SelectedState={args:{data:defaultData,geoJSONPath:"maps/states.json",processDataFn:defaultProcessDataFn,selectedState:["48"]}},MultipleSelectedStates={args:{data:defaultData,geoJSONPath:"maps/states.json",processDataFn:defaultProcessDataFn,selectedState:["48","40"]}},__namedExportsOrder=["Default","CustomColor","SelectedState","MultipleSelectedStates"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    mapProps: {\n      color: '#FF0000'\n    }\n  }\n}",...CustomColor.parameters?.docs?.source}}},SelectedState.parameters={...SelectedState.parameters,docs:{...SelectedState.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: defaultData,\n    geoJSONPath: 'maps/states.json',\n    processDataFn: defaultProcessDataFn,\n    selectedState: ['48']\n  }\n}",...SelectedState.parameters?.docs?.source}}},MultipleSelectedStates.parameters={...MultipleSelectedStates.parameters,docs:{...MultipleSelectedStates.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: defaultData,\n    geoJSONPath: 'maps/states.json',\n    processDataFn: defaultProcessDataFn,\n    selectedState: ['48', '40']\n  }\n}",...MultipleSelectedStates.parameters?.docs?.source}}}}}]);