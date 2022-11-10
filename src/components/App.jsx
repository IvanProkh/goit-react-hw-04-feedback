import React, { Component } from 'react';
import { Box } from './App.styled';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100) || 0;
  };

  leaveFeedback = options => {
    this.setState({ [options]: this.state[options] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      leaveFeedback,
    } = this;

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(total);

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
              positivePercentage={positivePercentage}
            />
          ) : (
            <h2>There is no feedback</h2>
          )}
        </Section>
      </Box>
    );
  }
}

export default App;
