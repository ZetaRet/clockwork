window.package("zetaret.global.packages.clockwork.data").internal(
function Randomizer(seed, count) {
	var o = this,a=arguments;
	o.Seed=seed||0;
	o.Count=count||0;
	o.SEED_CONST=2147483647;
	o.TIME_CONST=1034.256;
	o.NUMBER_SEED_CONST=16807;
	o.OVERFLOW_CONST=0;
	o.randomSeedCount=20;
	o.super(a, true);
	var m={};
	m.setRandomSeed=function(){
		var generateCycles=Math.random()*o.randomSeedCount,i;
		o.Seed=o.GetTime();
		for(i=0;i<generateCycles;i++)o.Seed=o.GenerateSeed();
		return o;
	};
	m.GetTime=function(){
		return Math.round((new Date()).getTime() / o.TIME_CONST);
	};
	m.GenerateSeed=function(){
		return (o.GetTime() % o.SEED_CONST) ^ o.GetInt();
	};
	m.GetInt=function(){
		o.Count++;
		o.Seed = (o.Seed * o.NUMBER_SEED_CONST + o.OVERFLOW_CONST) % o.SEED_CONST;
		return o.Seed;
	};
	m.GetNumber=function(){
		o.Count++;
		o.Seed = (o.Seed * o.NUMBER_SEED_CONST + o.OVERFLOW_CONST) % o.SEED_CONST;
		return o.Seed / o.SEED_CONST;
	};
	m.GetRange=function(min, max){
		o.Count++;
		o.Seed = (o.Seed * o.NUMBER_SEED_CONST + o.OVERFLOW_CONST) % o.SEED_CONST;
		return min + (max - min) * o.Seed / o.SEED_CONST;
	};
	m.GetRangeMethod=function(min, max, method){
		o.Count++;
		if (!method)
			method=Math.floor;
		o.Seed = (o.Seed * o.NUMBER_SEED_CONST + o.OVERFLOW_CONST) % o.SEED_CONST;
		return method(min + (max - min) * o.Seed / o.SEED_CONST);
	};
	m.Clone=function(){
		var c=new o.constructor(o.Seed, o.Count);
		return c;
	};
	o.superize(a,m,true,true);
	return o;
});
