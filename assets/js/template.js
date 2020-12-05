const template = (response) => {
    const {title, description} = response;
    return `## ${title} 

    \`\`\`bash
    node index.js
    \`\`\`

${description}

##`;
};

// how do we break this up?
// title functionz
// title(response) => {
//     ${response.title}
// };

// ----------  Layout of README page-------------------------------------------------------------//

// ## title

// ### description

// ### table of contents

// ### installation

// usage
    // gif




module.exports = template;
