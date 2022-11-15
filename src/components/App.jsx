// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Box } from './App.styled';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [total, setTotal] = useState(0);

  console.log('work');

  const leaveFeedback = options => {
    console.log(options);

    switch (options) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }

    // if (options === good) {
    //   setGood(options + 1);
    // }
  };

  useEffect(() => {
    // total = good + neutral + bad;
    setTotal(good + neutral + bad);
    console.log(total);
  }, [good, neutral, bad, total]);

  return (
    <Box>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            // positivePercentage={positivePercentage}
          />
        ) : (
          <h2>There is no feedback</h2>
        )}
      </Section>
    </Box>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = total => {
//     return Math.round((this.state.good / total) * 100) || 0;
//   };

//   leaveFeedback = options => {
//     this.setState({ [options]: this.state[options] + 1 });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const {
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//       leaveFeedback,
//     } = this;

//     const total = countTotalFeedback();
//     const positivePercentage = countPositiveFeedbackPercentage(total);

//     return (
//       <Box>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={leaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <h2>There is no feedback</h2>
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }

// export default App;
