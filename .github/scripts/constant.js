/*
Copyright 2023 Google LLC. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
let CONSTANT_VALUES = {
  GLOBALS: {
    LABELS: {
      BUG: 'bug',
      DOCUMENTATION: 'documentation',
      GOOD_FIRST_ISSUE: 'good first issue',
      ENHANCEMENT: 'enhancement',
      QUESTION: 'question',
      JAVASCRIPT: 'javascript',
      STATUS_IN_PROGRESS: 'status/in-progress',
      STATUS_NEEDS_INFO: 'status/needs-info',
      NEEDS_REVIEW: 'needs review',
      REQUEST_CLARIFICATION: 'request clarification'
    },
    STATE: { CLOSED: 'closed' },
  },
  MODULE: {
    CSAT: {
      YES: 'Yes',
      NO: 'No',
      BASE_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSeuqIP8vcNJv0Gv84ruyxmvrMQElhB2L0saRtuapK7c28QMWQ/viewform?',
      SATISFACTION_PARAM: 'entry.2064764942=',
      ISSUEID_PARAM: '&entry.666097176=',
      MSG: 'Are you satisfied with the resolution of your issue?',
    }
  }

};
module.exports = CONSTANT_VALUES;
