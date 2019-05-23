import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PlanCard from './PlanCard';


const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '60px',
    },
    '@media screen and (max-width: 900px)': {
        root: {
            flexDirection: 'column'
        },
    }
};
const CoursePlan = (props) => {
    const { classes } = props;

    return (
        <div style={{ backgroundColor: '#f8fafc' }}>
            <h2 style={{ marginTop: '40px' }}>量身定制学习计划</h2>
            <section className={classes.root}>
                <PlanCard title={'一对一咨询规划'} des={'通过在一线科技公司任职的导师的帮助, 实际提高编程水平'} />
                <PlanCard title={'学习成果评估'} des={'理论知识 + Coding动手，提升您的算法、编程、OOD能力'} />

                <PlanCard title={'高强度课程实战训练'} des={'巩固前3个月的学习成果，达到一线公司面试要求'} />

                <PlanCard title={'就业指导服务'} des={'通过面试后，薪酬谈判、职位选择等咨询服务'} />

            </section>

        </div>
    );
};

export default withStyles(styles)(CoursePlan);