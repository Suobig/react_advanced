# React Advanced

## Part 1: Architecture

## Part 2: Optimization

Было:

![profiler-before](https://github.com/Suobig/react_advanced/blob/master/src/common/images/profiler_before.png?raw=true)

Стало:

![profiler-after](https://github.com/Suobig/react_advanced/blob/master/src/common/images/profiler_after.png?raw=true)

Наблюдения:

1. Ререндерится только элемнет, который был изменен
2. Список фильтров перестал ререндерится на каждое измениние
3. Родительские компоненты продложают ререндериться (что ожидаемо, так работает React)
