import NationalReport from "./national-report";
import reducer from "./reducers";
import withReducer from "../../store/withReducer";

export default withReducer("nationalReportStore", reducer)(NationalReport);
