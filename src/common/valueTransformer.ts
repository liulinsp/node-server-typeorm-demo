/**
 * 值转换器
 */
import moment from 'moment';
import { ValueTransformer } from 'typeorm';

/**
 * 创建日期时间格式转换器
 * @param {string} fromFormat 从数据库读取后，将时间转换为字符串的格式
 * @return {ValueTransformer}
 */
function createDatetimeValueTransformer (fromFormat: string = 'YYYY-MM-DD HH:mm:ss'): ValueTransformer {
    return {
        to: (val) => {
            // console.log('#### to', typeof val, '#', val);
            return val && moment(val).format(fromFormat);
        },
        from: (val) => {
            // console.log('#### from', typeof val, '#', val);
            return val && moment(val).format(fromFormat);
        }
    };
}

// YYYY-MM-DD HH:mm:ss 格式的日期时间值转换器
export const datetimeTransformer: ValueTransformer = createDatetimeValueTransformer();

// YYYY-MM-DD 格式的日期值转换器
export const dateTransformer: ValueTransformer = createDatetimeValueTransformer('YYYY-MM-DD');
