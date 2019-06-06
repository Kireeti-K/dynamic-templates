
const tdata = { subjects: [] };

const terms = ['term1', 'term2'];
const subjects = ['Telugu', 'English', 'Hindi', 'Maths', 'Science', 'Social Studies'];
const skills = ['Homework', 'Drug Dealing', 'Assaulting Teacher', 'Blackmailing'];


function addDummyTableData() {
    const tsubjects = {};
    for (let i = 0; i < subjects.length; i += 1) {
        tsubjects[i] = {
            id: subjects[i],
            terms: terms.map(cval => (
                {
                    id: cval,
                    skills: skills.map(skill => (
                        {
                            id: skill,
                            marks: 20,
                        }
                    )),
                }
            )),
        };
    }

    tdata.subjects = tsubjects;
    console.log(JSON.stringify(tdata));
}


addDummyTableData();

export default {
    tableData: tdata,
};
