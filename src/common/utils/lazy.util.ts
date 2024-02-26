/**
 *
 * @param map
 * @param fromObj
 * @param toObj
 * @returns {*}
 */
const additionalMap = (map, fromObj, toObj) => {
  for (const mapKey in map) {
    if (typeof map[mapKey] === 'object') {
      if (Array.isArray(fromObj[mapKey])) {
        for (let i = 0; i < fromObj[mapKey].length; i++) {
          toObj[mapKey][i] = additionalMap(
            map[mapKey],
            fromObj[mapKey][i],
            toObj[mapKey][i]
          );
        }
      } else {
        toObj[mapKey] = additionalMap(
          map[mapKey],
          fromObj[mapKey],
          toObj[mapKey]
        );
      }
    }

    if (
      typeof fromObj[map[mapKey]] !== 'undefined' &&
      // eslint-disable-next-line no-prototype-builtins
      toObj.hasOwnProperty(mapKey)
    ) {
      toObj[mapKey] = fromObj[map[mapKey]];
    }
  }
  return toObj;
};

/**
 * @author: @DyanGalih <dyan.galih@gmail.com>
 * @param fromObj
 * @param toObj
 * @param map
 * @returns {Promise<*>}
 */

const transform = async (fromObj, toObj, map = null) => {
  const targetObject =
    typeof toObj['dataValues'] !== 'undefined' ? toObj['dataValues'] : toObj;
  for (const toObjKey in targetObject) {
    if (fromObj[toObjKey] !== undefined) {
      if (toObj[toObjKey] !== null && typeof toObj[toObjKey] === 'function') {
        if (Array.isArray(fromObj[toObjKey])) {
          toObj[toObjKey] = await Promise.all(
            fromObj[toObjKey].map(async (item) => {
              return transform(item, new toObj[toObjKey]());
            })
          );
        } else {
          toObj[toObjKey] = await transform(
            fromObj[toObjKey],
            new toObj[toObjKey]()
          );
        }
      } else {
        toObj[toObjKey] = fromObj[toObjKey];
      }
    }
  }
  if (map !== null) {
    toObj = additionalMap(map, fromObj, toObj);
  }

  return toObj;
};

const LazyUtil = { transform };
export default LazyUtil;
