const indent1 = "\n    ";
const newline = "\n";
const newlineDouble = "\n\n";

function generateFaceClaimCode(alias, face, group, name, url) {
    // create containing element
    var claim = document.createElement("div");
    claim.className = "claim-row";

    // face element
    var claimFace = document.createElement("span");
    claimFace.className = "detail-alitus";
    claimFace.appendChild(document.createElement("b"));
    claimFace.firstChild.innerHTML = face;

    // character element
    var claimCharacter = document.createElement("span");
    claimCharacter.className = "detail-alitus no-bg text-color-" + group;
    var claimLink = document.createElement("a");
    claimLink.href = url;
    claimLink.title = "played by " + alias;
    claimLink.innerHTML = name;
    claimCharacter.appendChild(claimLink);

    // add content to container
    claim.innerHTML += indent1;
    claim.appendChild(claimFace);
    claim.innerHTML += " as ";
    claim.appendChild(claimCharacter);
    claim.innerHTML += newline;

    return claim;
}

function generateOccupationClaimCode(group, name, url, occupation) {
    // create containing element
    var claim = document.createElement("div");
    claim.className = "list-item level-3";

    // create content
    var claimCharacter = document.createElement("span");
    claimCharacter.className = "list-taken-by text-color-" + group;
    var claimLink = document.createElement("a");
    claimLink.href = url;
    claimLink.innerHTML = name;
    claimCharacter.appendChild(claimLink);

    // put all the pieces together
    claim.innerHTML += indent1;
    claim.appendChild(claimCharacter);
    if (occupation) {
        var claimOccupation = document.createElement("span");
        claimOccupation.className = "list-aside";
        claimOccupation.innerHTML += "(" + occupation + ")";
        claim.innerHTML += indent1;
        claim.appendChild(claimOccupation);
    }
    claim.innerHTML += newline;

    return claim;
}

/* HTML TO GENERATE:
<div class="list-item level-1">
    <span class="heading-dinorwic">LAB_NAME</span>
</div>

<div class="textblock-aniak left list-item level-2">
    LAB_DESCRIPTION
</div>

<div class="list-item level-2">
    <span class="heading-dollfus">Lead</span>
    <span class="pill-gusev">Limit 1</span>
</div>

<div class="list-item level-2">
    <span class="heading-dollfus">Staff</span>
</div>
*/
function generateLabClaimCode(labName, labDesc) {
    // create containing element
    var claim = document.createElement("div")

    // lab name
    var nameContainer = document.createElement("div");
    nameContainer.className = "list-item level-1";
    nameContainer.innerHTML += indent1;

    var nameInner = document.createElement("span");
    nameInner.className = "heading-dinorwic";
    nameInner.innerHTML = labName;

    nameContainer.appendChild(nameInner);
    nameContainer.innerHTML += newline;

    // lab description
    var descContainer = document.createElement("div");
    descContainer.className = "list-item level-2 textblock-aniak";
    descContainer.innerHTML = indent1 + labDesc + newline;

    // lead header
    var leadContainer = document.createElement("div");
    leadContainer.className = "list-item level-2";

    var leadLabel = document.createElement("span");
    leadLabel.className = "heading-dollfus";
    leadLabel.innerHTML = "Lead";

    var limit = document.createElement("span");
    limit.className = "pill-gusev";
    limit.innerHTML = "Limit 1";

    leadContainer.innerHTML += indent1;
    leadContainer.appendChild(leadLabel);
    leadContainer.innerHTML += indent1;
    leadContainer.appendChild(limit);
    leadContainer.innerHTML += newline;

    // staff header
    var staffContainer = document.createElement("div");
    staffContainer.className = "list-item level-2";
    var staffInner = document.createElement("span");
    staffInner.className = "heading-dollfus";
    staffInner.innerHTML += "Staff";

    staffContainer.innerHTML += indent1;
    staffContainer.appendChild(staffInner);
    staffContainer.innerHTML += newline;

    // put all the pieces together
    claim.appendChild(nameContainer);
    claim.innerHTML += newlineDouble;
    claim.appendChild(descContainer);
    claim.innerHTML += newlineDouble;
    claim.appendChild(leadContainer);
    claim.innerHTML += newlineDouble;
    claim.appendChild(staffContainer);

    return claim;
}

function generateClaimCode() {
    const formId = this.getAttribute("form");
    const form = document.getElementById(formId);

    // create temp container
    var code = document.createElement("div");

    // get a handle on the place the code needs to go
    var resultBox = document.getElementById("claim-generator-result").getElementsByClassName("code-scroll")[0];

    // get form inputs
    class claimText {
        constructor(name) {
            this.value = form.elements[name].value;
            this.required = form.elements[name].required;
            this.prettyName = name.replace(/-/g, " ");
        }
    }

    function claimBool(name) {
        return form.elements[name].value == 'true';
    }

    var input = {
        alias: new claimText("writer-alias")
        , face: new claimText("face-claim")
        , group: new claimText("member-group")
        , name: new claimText("character-name")
        , labDesc: new claimText("lab-desc")
        , labName: new claimText("lab-name")
        , occupation: new claimText("occupation")
        , requester: new claimText("requester")
        , requestLocation: new claimText("request-location")
        , url: new claimText("profile-url")

        , isLead: claimBool("is-lead-scientist")
        , isNewLab: claimBool("is-new-lab")
    };

    // check that required input is present
    var error = false;
    for (var x in input) {
        if (input[x].required && !input[x].value) {
            error = true;
            code.innerHTML += "ERROR: Missing " + input[x].prettyName + newline;
        }
    }
    if (input.isNewLab && !input.labDesc.value) {
        error = true;
        code.innerHTML += "ERROR: Missing " + input.labDesc.prettyName + newline;
    }
    if (input.group.value == "scientist" && !input.labName.value) {
        error = true;
        code.innerHTML += "ERROR: Missing " + input.labName.prettyName + newline;
    }

    // process claims
    if (!error) {
        var faceClaim = generateFaceClaimCode(
            input.alias.value
            , input.face.value
            , input.group.value
            , input.name.value
            , input.url.value
        );
        var occupationClaim = generateOccupationClaimCode(
            input.group.value
            , input.name.value
            , input.url.value
            , input.occupation.value
        );
        if (input.isNewLab) {
            // the occupation claim needs to be inserted into the lab claim

            var labClaim = generateLabClaimCode(
                input.labName.value
                , input.labDesc.value
            );

            if (input.isLead) {
                var elementsAfter = 1;
            } else {
                var elementsAfter = 0;
            }

            var x = document.createElement("div");

            while (labClaim.children.length > 0) {
                x.appendChild(labClaim.children[0]);
                
                if (labClaim.children.length > 0) {
                    x.innerHTML += newlineDouble;
                }

                if (labClaim.children.length == elementsAfter) {
                    if (elementsAfter == 0) {
                        x.innerHTML += newlineDouble;
                    }

                    x.appendChild(occupationClaim);

                    if (elementsAfter > 0) {
                        x.innerHTML += newlineDouble;
                    }
                }
            }
            occupationClaim = x;
        }

        // add claims to final output code
        code.innerHTML += "&#91;pathfinder&#93;\n";
        code.innerHTML += "Face claim: \n&#91;code&#93;\n";
        code.appendChild(faceClaim);
        code.innerHTML += "\n&#91;/code&#93;\n\n";

        code.innerHTML += "Occupation claim:"
        if (input.group.value == "scientist" && input.isLead) {
            code.innerHTML += "\n(Add to " + input.labName.value + " as Lead)";
        } else if (input.group.value == "scientist" && !input.isLead) {
            code.innerHTML += "\n(Add to " + input.labName.value + " as Staff)";
        }
        code.innerHTML += "\n\n&#91;code&#93;\n";
        if (input.isNewLab) {
            code.innerHTML += occupationClaim.innerHTML;
        } else {
            code.appendChild(occupationClaim);
        }
        code.innerHTML += "\n&#91;/code&#93;";

        // add request details, if applicable
        if (input.requester.value || input.requestLocation.value) {
            code.innerHTML += "\n\n&#91;b&#93;REQUESTED CHARACTER&#91;/b&#93;\n";

            // add requester name, if available
            if (input.requester.value) {
                code.innerHTML += "Requested by: " + input.requester.value + newline;
            }

            // add request location, if available
            if (input.requestLocation.value) {
                // if it looks like a link, make it a link
                if (input.requestLocation.value && /^http/.test(input.requestLocation.value)) {
                    var requestLink = "&#91;url=" + input.requestLocation.value + "&#93;" + input.requestLocation.value + "&#91;/url&#93;";
                }

                code.innerHTML += "Request location: ";
                if (requestLink) {
                    code.innerHTML += requestLink;
                } else {
                    code.innerHTML += input.requestLocation.value;
                }
            }
        }

        code.innerHTML += "\n&#91;/pathfinder&#93;";
    }

    // put code in the code box for use
    resultBox.textContent = code.innerHTML;
    return;
}

(function(){
  "use strict";

  const runBtn =  document.getElementById("claim-generator-run");
  runBtn.addEventListener("click", generateClaimCode, false);
})();
