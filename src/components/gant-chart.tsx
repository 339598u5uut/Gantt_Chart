import React, { FC, useEffect, useState } from 'react';
import { DayPilotGantt } from 'daypilot-pro-react';
import '../index.css';
import { useDispatch, useSelector } from '../services/reducers/root-reducer';
import { getData } from '../services/actions/data';
import { TargsOnBeforeTimeHeaderRender } from '../services/utils/types';
import { Main } from "./main";

const GanttChart: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const dataApi = useSelector((state) => state.data.data);

  const [state, setState] = useState({
    timeHeaders: [
      { groupBy: "Month", формат: "ММММ YYYY" },
      { groupBy: "Week" }, { groupBy: "Day", format: "d" }
    ],
    startDate: "2022-09-01",
    cellWidth: 22,
    scale: "Day",
    days: 122,
    locale: "ru-ru",
    rowHeaderHideIconEnabled: false,
    columns: [{ title: "Work item", width: 390, heigth: 48, property: "text" }],
    heightSpec: "Fixed",
    height: 750,
    completeBarVisible: false,
    headerHeight: 20,
    rowMinHeight: 40,
    taskHeight: 30,
    rowMoveHandling: "Disabled",
    taskGroupMode: "Manual",

    //да, я понимаю, что далее код — кровь из глаз, 
    //но никак не получилось отобразить все это другим способом =))
    tasks: [{
      start: dataApi.chart.period_start,
      end: dataApi.chart.period_end,
      id: dataApi.chart.id,
      text: dataApi.chart.title,

      children: [{
        start: dataApi.chart.sub[0]?.period_start,
        end: dataApi.chart.sub[0]?.period_end,
        id: dataApi.chart.sub[0]?.id,
        text: dataApi.chart.sub[0]?.title,

        children: [{
          start: dataApi.chart.sub[0]?.sub[0].period_start,
          end: dataApi.chart.sub[0]?.sub[0].period_end,
          id: dataApi.chart.sub[0]?.sub[0].id,
          text: dataApi.chart.sub[0]?.sub[0].title,

          children: [{
            start: dataApi.chart.sub[0]?.sub[0]?.sub[0].period_start,
            end: dataApi.chart.sub[0]?.sub[0]?.sub[0].period_end,
            id: dataApi.chart.sub[0]?.sub[0]?.sub[0].id,
            text: dataApi.chart.sub[0]?.sub[0]?.sub[0].title,

            children: [{
              start: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[0].period_start,
              end: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[0].period_end,
              id: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[0].id,
              text: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[0].title,
            },
            {
              start: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[1].period_start,
              end: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[1].period_end,
              id: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[1].id,
              text: dataApi.chart.sub[0]?.sub[0]?.sub[0]?.sub[1].title,
            },
            ]
          }]
        }]
      }]
    }],

    onBeforeTimeHeaderRender: (args: TargsOnBeforeTimeHeaderRender) => {
      if (args.header.level === 1) {
        args.header.html = args.header.start.firstDayOfWeek().addDays(1).toString("d MMM") +
          '-' + args.header.start.firstDayOfWeek().addDays(7).toString("d MMM");
      }
      if (args.header.level === 2) {
        const dayOfWeek = args.header.start.getDayOfWeek();

        if (dayOfWeek === 0 || dayOfWeek === 6) {
          args.header.backColor = "#d0d0d0";
        }
      }
    },
  });

  return (
    <Main project={dataApi.project} period={dataApi.period}>
      <DayPilotGantt {...state}
      />
    </Main>
  );
}

export default GanttChart;