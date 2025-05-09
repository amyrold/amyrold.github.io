---
processed: true
inactive: 
type:
  - reference
project: 
tags: 
topics:
  - options-trading
  - investing
connections:
---
### Overview
The Poor Man's Covered Call (PMCC), also known as a diagonal call spread, represents a capital-efficient alternative to traditional covered call strategies. This strategy employs options contracts to simulate the risk-reward profile of a covered call position while requiring less initial capital investment.

### Core Components
1. [[Long-term Equity Anticipation Securities (LEAPS) | LEAPS]] Call Option
   - Typically purchased with 70 delta
   - Acts as a surrogate for stock ownership
   - Usually 12+ months until expiration
   - Benefits from [[volatility expansion]] through positive [[vega exposure]]

2. Short-Term Short Calls
   - Usually 30-45 days until expiration
   - Typically sold at 30 delta
   - Generates regular premium income
   - Creates a ceiling on potential gains

### Risk-Reward Profile

The strategy creates a sophisticated risk-reward profile through the interaction of multiple [[options Greeks]]:

![[options Greeks]]

### Management Considerations

**Assignment Risk Management:**
When short calls become in-the-money near expiration, several management options exist:

1. Pre-Emptive Management (Preferred):
   - Close short call before expiration
   - Roll to new strike/expiration if conditions warrant
   - Preserves LEAPS time value
   - Maintains strategic flexibility

2. Assignment Response:
   - Close entire position
   - Exercise LEAPS (generally sub-optimal)
   - Roll short call up and out
   - Convert to different strategy

**Volatility Considerations:**
- Entering long LEAPS in low IV environments can provide additional profit potential through volatility expansion
- Short call premium varies with IV environment
- Term structure affects relative pricing of long versus short options

### Implementation Guidelines

1. Entry Criteria:
   - Consider IV relative to historical averages
   - Evaluate term structure of volatility
   - Assess underlying trend and momentum
   - Calculate capital efficiency versus traditional covered calls

2. Position Sizing:
   - Account for leverage inherent in options
   - Consider portfolio delta exposure
   - Factor in maximum loss scenarios
   - Maintain appropriate position diversity

3. Ongoing Management:
   - Monitor short call gamma exposure
   - Track changes in implied volatility
   - Assess roll opportunities
   - Calculate adjustment costs versus benefits



