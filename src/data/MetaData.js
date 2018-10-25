window.package("zetaret.global.packages.clockwork.data").internal(
function MetaData(){
	var o = this,a=arguments;
	o.metadata={};
	var m={};
	m.setMetaData=function(key, value){
		o.metadata[key]=value;
		return o;
	};
	m.getMetaData=function(){
		return o.metadata;
	};
	m.getMetaDataByKey=function(key){
		return o.metadata[key];
	};
	o.superize(a,m,true,true);
	return o;
});
