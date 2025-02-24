"use client";

import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Apply the animated theme
am4core.useTheme(am4themes_animated);

const Chart3D = ({ data }) => {
  const chartDiv = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    const chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // initial fade-in

    // Add custom tokenomics data with separate height and adjusted values
    chart.data = data;

    // Remove inner radius to make it a full pie (not donut)
    chart.innerRadius = 0;
    chart.depth = 300;
    chart.angle = 40;

    // Remove legend completely
    chart.legend = null;

    // Create series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.depthValue = "height"; // Use custom height
    series.dataFields.category = "name";
    series.slices.template.cornerRadius = 5;

    // Use custom colors from data
    series.slices.template.adapter.add("fill", (fill, target) => {
      if (target.dataItem && target.dataItem.dataContext.color) {
        return am4core.color(target.dataItem.dataContext.color);
      }
      return fill;
    });

    // Remove external labels and connector lines
    series.ticks.template.disabled = true;
    series.labels.template.disabled = false;

    // Add percentage labels inside each slice with 3D Z-axis tilt
    series.labels.template.text = "{displayValue}%";
    series.labels.template.radius = am4core.percent(-40); // Move labels closer to the center
    series.labels.template.fill = am4core.color("#FFFFFF");
    series.labels.template.fontSize = 18;
    series.labels.template.fontWeight = "bold";
    series.alignLabels = false;

    // Center the labels within each slice
    series.labels.template.adapter.add("verticalCenter", () => "middle");
    series.labels.template.adapter.add("horizontalCenter", () => "middle");

    // Apply realistic 3D rotation effect
    series.labels.template.adapter.add("html", (html, target) => {
      return `<div style="transform: perspective(800px) rotateX(25deg) rotateZ(-25deg); transform-origin: center; display: inline-block;">${target.text}</div>`;
    });

    // Disable label truncation
    series.labels.template.maxWidth = undefined;
    series.labels.template.wrap = false;

    // Customize tooltip
    series.slices.template.tooltipText = "{name} ({displayValue}%)";

    // Clean up function
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      className="w-[650px] h-[650px] mx-auto my-auto mt-[30px]"
      ref={chartDiv}
    ></div>
  );
};

export default Chart3D;
