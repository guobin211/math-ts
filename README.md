# Typescript Tool library

Easy Function of Typescript

Each function is independent and small
    
### example Function

    npm i math-ts --save

    import {chunk} from 'math-ts/package.array/chunk'; 
    const arr = [1, 2, 3, 4];
    chunk(arr, 2);     // [ [1, 2], [3, 4] ]
    
    
    import {dateFormat} from 'math-ts/package.date/dateFormat';
    
    dateFormat(new Date())  // 2018-11-11

### array
    
    arrayDifference:      获取数组差集
    chunk:                数组分组
    compact:              过滤数组假值元素
    countBy:              数组分组
    countOccurrences:     计算元素出现次数 
    deepflatten:            深度平铺数组
    difference:             数组比较差异
    differenceWith:         根据函数比较数组差异
    dropElements:           删除元素
    everyNth:               获取数组中的每组的第n个元素
    filterNoUnique:         过滤掉数组中的非唯一值
    flatten:                按层次平铺数组
    forEachRight:           反方向遍历
    groupBy:                按函数分组
    indexOfAll:             查找元素的所有索引
    init2DArray:            初始化一个二维数组
    intersection:           两个数组中都存在的元素
    isSorted:               是否是排序数组
    join:                   数组拼接成字符串
    longsItem:              数组中最长的
    mapObject:              数组转object映射
    occunrrence:            计算元素出现的次数
    pick:                   提取数组元素
    pull:                   删除数组元素
    pullAtIndex:            按索引删除元素
    pullAtValue:            按值删除元素
    reducedFilter:          过滤一个对象数组
    sample:                 随机获取数组元素
    setArray:               数组去重复
    shuffle:                数组洗牌
    similar:                获取数组交集
    union:                  数组合集
    
### date
    
    dateFormat                  格式化日期对象
    getPrev                     昨天，上个月，去年
    getNext                     明天，下个月，明年
    getDaysDiffBetweenDates     获取两个日期之间相差的天数

### math
    
    average                 求平均数
    averageBy               根据条件求平均数
    digitize                转化为整数
    factorial               阶乘
    sum                     求和
    toSafeInteger           安全整数
    sumPower                幂累加
    standardDeviation       总体标准偏差 (默认 true)/ 样本标准偏差 (传入 false)

### string

    buildUrlParams                  对象转url查询参数
    capitalize                      首字母大写
    capitalizeEveryWord             每个单词首字母大写
    csvDownload                     下载csv文件
    escapeHTML                      转义成html
    escapeRegExp                    转义正则表达式
    fromCamelCase                   解析驼峰命名
    getURLParams                    获取url查询参数
    htmlToExcel                     下载html的表格
    isAbsoluteURL                   是否是绝对地址
    mask                            遮罩
    parseCookie                     解析cookie
    randomHexColorCode              随机颜色
    reverseString                   反转字符串
    serializeCookie                 序列化cookie
    sortCharactersInString          按字母顺序排列
    splitLines                      将多行字符串拆分为数组
    toCamelCase                     转成驼峰
    toKebabCase                     转成链接符
    toSnakeCase                     转成下划线
    unescapeHTML                    反解析html
    words                           字符串转换为单词数组
    csvDownload                     下载csv文件

### sort    排序算法样本
    
    bubbleSort                      冒泡排序
    countingSort                    计数排序
    heapSort                        堆排序
    insertionSort                   插入排序
    mergeSort                       归并排序
    quickSort                       快速排序
    radixSort                       基数排序
    selectionSort                   选择排序
    shellSort                       希尔排序

### package list

    array
    collection
    date
    function
    graph
    hashmap
    heap
    linked
    math
    object
    queue
    sort
    stacks
    tree

