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

## Part 3: RTK Query

1. Создание API-модуля через RTK Query

   * API корректно описан и экспортирует хук useGetTasksQuery
   * Загрузка задач происходит без ошибок
   * Используется transformResponse для получения массива

2. Отображение задач в интерфейсе

   * Реализован хук useTasks, в котором данные загружаются через useGetTasksQuery
   * Задачи отображаются в интерфейсе
   * Код структурирован и соответствует FSD

3. Локальное удаление задачи

   * Использован useEffect для загрузки данных в useState
   * Реализована функция removeTask
   * После удаления задача исчезает из UI

4. Общий baseApi + injectEndpoints для tasksApi

   * baseApi создан и экспортирован из shared/api/baseApi.ts
   * tasksApi использует injectEndpoints от baseApi; getTasks корректно возвращает Task[]
   * в store подключены baseApi.reducer и baseApi.middleware один раз

Кроме того, добавлена обработка состояний загрузки и ошибки в компоненте TaskWidget
