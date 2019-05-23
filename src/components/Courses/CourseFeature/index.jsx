import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FeatureCard from './FeatureCard';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '60px',

    },
    '@media screen and (max-width: 900px)': {
        root: {
            flexDirection: 'column'
        },
    }
};
const CourseFeature = (props) => {
    const { classes } = props;

    return (
        <div style={{ backgroundColor: '#fff' }}>
            <h2 style={{ marginTop: '40px' }}>课程特色</h2>
            <section className={classes.root}>
                <FeatureCard title={'FLAG资深面试官授课'} des={`课程授课老师均为FLAG级别公司资深面试官，拥有丰富教学经验，且深刻理解面试要求，能够帮助学员事半功倍冲刺面试.`} />
                <FeatureCard title={'独创“算法可视化”教学法'} des={'经过上千学员验证的“算法可视化”教学法，帮助梳理知识图谱，在最短时间内做到算法学习举一反三，面试知识点全覆盖、无死角。实现面试冲刺的“最优解”。'} />

                <FeatureCard title={'课程组老师全方位监督答疑'} des={'主讲老师、助教、班主任老师全程陪伴监督学习，确保学习效果，及时跟进学习进度。直播答疑环节、课外答疑平台、Office Hour多渠道保障疑问得到解决。'} />
            </section>
            <section className={classes.root}>
                <FeatureCard title={'无限次合作企业直推'} des={'学员可不限时间、不限次数使用FLAG Dream的100+合作企业直推服务，以及北美华人最大人力资源综合性服务商IntelliPro的求职支持，帮助获取Offer。'} />
                <FeatureCard title={'独创“算法可视化”教学法'} des={'经过上千学员验证的“算法可视化”教学法，帮助梳理知识图谱，在最短时间内做到算法学习举一反三，面试知识点全覆盖、无死角。实现面试冲刺的“最优解”。'} />

                <FeatureCard title={'课程组老师全方位监督答疑'} des={'主讲老师、助教、班主任老师全程陪伴监督学习，确保学习效果，及时跟进学习进度。直播答疑环节、课外答疑平台、Office Hour多渠道保障疑问得到解决。'} />


            </section>

        </div>
    );
};

export default withStyles(styles)(CourseFeature);