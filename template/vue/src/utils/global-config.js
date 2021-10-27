import moduleCfg from '../modules/module.config'

export function getConfig(name, target = window) {
  let cfgItem = "";
  if (target.$baseCfg) {
    // const cfg = Object.assign(target.$baseCfg, target.$globalCfg, target.$apisCfg);
    const cfg = Object.assign(target.$baseCfg);
    cfgItem = cfg[name] ? cfg[name] : ''
  }
  if (!cfgItem) {
    cfgItem = moduleCfg[name]
  }

  return cfgItem
}
