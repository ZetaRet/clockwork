/**
 * Author: Zeta Ret, Ivo Yankulovski
 * Zeta Ret Clockwork, ProtoSS OOP
 * Interface Generator, Mass Class/Header Resolve, Function Decomposer, Class Parser, ProtoSS-XeltoSS Transformator
 * Requires: ProtoSS, XeltoSS, protoss.all.js
 * Version: 1.04
 * Date: 2017 - Today
 **/
window.package("zetaret.global.packages.clockwork").internal(
function Clockwork() {
	var o = this,
		a = arguments;
	o.useXeltoSS = false;
	o.calibers = {};
	o.super(a, true);
	var m = {};
	m.unpackCaliber = function(clbrname, toppack, xeltoss) {
		var i, clbr = ProtoSS.getDefinitionByName(clbrname),
			clbrcls, xcls = [],
			cls = clbr.classes,
			sets = clbr.settings || {},
			types = clbr.types || {},
			args = clbr.args || {};
		if (!toppack) toppack = o.toppack || window;
		for (i in cls) {
			clbrcls = o.caliberClass(i, cls[i], sets[i], false, args[i], types[i]);
			clbrcls.caliberVersion = clbr.caliber + ":" + clbr.version;
			clbrcls.caliberName = clbrname;
			toppack.package(clbr.targetpackagename).internal(clbrcls);
			xcls.push(clbrcls);
		}
		o.resolveHeaders(toppack, null, true);
		o.calibers[clbrname] = xcls;
		if (xeltoss && o.useXeltoSS) {
			o.runXeltoSS(xcls);
		}
		return xcls;
	};
	m.xeltossCaliber = function(clbrname) {
		var xcls = o.calibers[clbrname];
		if (xcls && o.useXeltoSS) {
			o.runXeltoSS(xcls);
		}
		return o;
	};
	m.caliberClass = function(name, supers, settings, defname, superargs, supertype) {
		var cfn = function(cdata) {
			var o = this,
				a = arguments;
			o.serialnumber = 0;
			o.superx(a, superargs);
			var m = {};
			m._calibrate = function() {
				var s = o.constructor.caliberSettings,
					k;
				for (k in s) o[k] = s[k];
			};
			m._calibrate.call(o);
			m.sharedMemorySet = function(key, value) {
				o.constructor.sharedMemory[key] = value;
			};
			m.sharedMemoryGet = function(key) {
				return o.constructor.sharedMemory[key];
			};
			m.getCaliberSetting = function(key) {
				return o.constructor.caliberSettings[key];
			};
			m._constructor = function() {
				o.serialnumber = o.constructor.serialnumber++;
			};
			o.superize(a, m, true);
			m._constructor.call(o);
			return o;
		};
		cfn.caliberSettings = settings;
		cfn.sharedMemory = {};
		cfn.serialnumber = 0;
		if (!supertype) ProtoSS.headerSuperList2.push([cfn, supers]);
		else ProtoSS.headerSuperList.push([cfn, supers]);
		cfn.aname = name;
		if (defname) Object.defineProperty(cfn, "name", {
			value: name
		});
		return cfn;
	};
	m.runXeltoSS = function(xcls) {
		var x, xclsc, xa, i, m;
		try {
			for (i = 0; i < xcls.length; i++) {
				xclsc = xcls[i];
				m = 0;
				if (xclsc.__xeltoss_amaps) {
					xa = xclsc.__xeltoss_amaps;
					for (x = 0; x < xa.length; x++)
						o.augmentKey(xclsc, zcl.augmentKeyMap[ProtoSS.getDefinitionByName(xa[x]).getSuperName2()]);
				}
				m = 1;
				if (xclsc.__xeltoss_emaps) {
					xa = xclsc.__xeltoss_emaps;
					for (x = 0; x < xa.length; x++)
						o.addEmbedMap(xclsc, zcl.embedMaps[ProtoSS.getDefinitionByName(xa[x]).getSuperName2()]);
				}
				m = 2;
				if (xclsc.__xeltoss_eamaps) {
					xa = xclsc.__xeltoss_eamaps;
					for (x = 0; x < xa.length; x++) {
						o.augmentKey(xclsc, zcl.augmentKeyMap[ProtoSS.getDefinitionByName(xa[x]).getSuperName2()]);
						o.addEmbedMap(xclsc, zcl.embedMaps[ProtoSS.getDefinitionByName(xa[x]).getSuperName2()]);
					}
				}
				m = 3;
				if (xclsc.__xeltoss_augmentmap) {
					o.augmentKey(xclsc, xclsc.__xeltoss_augmentmap);
				}
				m = 4;
				if (xclsc.__xeltoss_embedmap) {
					o.addEmbedMap(xclsc, xclsc.__xeltoss_embedmap);
				}
				m = 5;
				if (xclsc.__xeltoss_prepare) xclsc.__xeltoss_prepare(o);
				m = 6;
				o.xeltoss(xclsc);
			}
		} catch (e) {
			o.errorData = {};
			o.errorData.x = x;
			o.errorData.xclsc = xclsc;
			o.errorData.xa = xa;
			o.errorData.i = i;
			o.errorData.m = m;
			if (o.debug) o.debug("error", "runXeltoSS", o, o.errorData);
			throw (e);
		}
	};
	o.superize(a, m, true, true);
	return o;
});