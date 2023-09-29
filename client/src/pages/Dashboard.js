import "./Dashboard.css";
import WeightForm from "../components/WeightForm";
import WeightGraph from "../components/WeightGraph";
import Timeline from "../components/Timeline";
export function Dashboard() {
  return (
    <div id="dashboard">
      {/* The goal is create a 2 column dashboard. The first column will be a time line that shows they entered the weight but also shows when they reached milestones. The second column will be a form that allows the user to enter their weight. As well as a grass that shows their progress. */}
      <div id='left-dashboard'>
      <h1> Timeline </h1>
      <Timeline />
      </div>
      {/* Timeline */}
      {/* The reason I have the form and graph in a nested div is I am going to put to set the display to flex with a direction of column. This will create the grid effect I am looking for. */}
      <div id = 'right-dashboard'>
        <WeightForm/>
        <WeightGraph/>
      </div>
    </div>
  );
}
