/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

const CONSTANT_VALUES = require('./constant.cjs');

/**
 * Invoked from csat_adkjs.yml file to post survey link
 * in closed issue.
 * @param {!Object.<string,!Object>} github contains pre defined functions.
 *  context Information about the workflow run.
 * @return {null}
 */
module.exports = async ({ github, context }) => {
    const issue = context.payload.issue.html_url;
    const baseUrl = CONSTANT_VALUES.MODULE.CSAT.BASE_URL;

    // Loop over all ths label present in issue and check if specific label is
    // present for survey link.
    for (const label of context.payload.issue.labels) {
        if (label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.BUG) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.DOCUMENTATION) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.GOOD_FIRST_ISSUE) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.ENHANCEMENT) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.QUESTION) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.JAVASCRIPT) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.STATUS_IN_PROGRESS) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.STATUS_NEEDS_INFO) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.NEEDS_REVIEW) ||
            label.name.includes(CONSTANT_VALUES.GLOBALS.LABELS.REQUEST_CLARIFICATION)) {

            console.log(`label-${label.name}, posting CSAT survey for issue =${issue}`);

            const yesCsat = `<a href="${baseUrl + CONSTANT_VALUES.MODULE.CSAT.SATISFACTION_PARAM +
                CONSTANT_VALUES.MODULE.CSAT.YES +
                CONSTANT_VALUES.MODULE.CSAT.ISSUEID_PARAM + encodeURIComponent(issue)}"> ${CONSTANT_VALUES.MODULE.CSAT.YES}</a>`;

            const noCsat = `<a href="${baseUrl + CONSTANT_VALUES.MODULE.CSAT.SATISFACTION_PARAM +
                CONSTANT_VALUES.MODULE.CSAT.NO +
                CONSTANT_VALUES.MODULE.CSAT.ISSUEID_PARAM + encodeURIComponent(issue)}"> ${CONSTANT_VALUES.MODULE.CSAT.NO}</a>`;

            const comment = CONSTANT_VALUES.MODULE.CSAT.MSG + '\n' + yesCsat + '\n' + noCsat + '\n';
            let issueNumber = context.issue.number ?? context.payload.issue.number;

            await github.rest.issues.createComment({
                issue_number: issueNumber,
                owner: context.repo.owner,
                repo: context.repo.repo,
                body: comment
            });
        }
    }
};
