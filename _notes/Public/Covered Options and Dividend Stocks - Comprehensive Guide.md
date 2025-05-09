---
processed: true
inactive: 
type:
  - moc
topics:
  - options-trading
connections: 
project: 
tags:
---
## Core Concepts

### Covered Calls
A covered call strategy involves two components:
1. Owning 100 shares of a stock
2. Selling (writing) a call option against those shares

When you sell a covered call, you're giving someone else the right to buy your shares at a specific price (strike price) before a certain date (expiration date) in exchange for an upfront premium payment.

### Covered Puts
A covered put involves:
1. Holding cash equal to 100 shares at the strike price
2. Selling someone the right to sell shares to you at that price

The cash held as collateral can earn interest while you collect premium income.

## Key Terminology

### Order Types
- "Sell to open" - Creating a new short option position
- "Buy to close" - Closing out a short option position
- "Buy to open" - Creating a new long option position
- "Sell to close" - Closing out a long option position

### Price Terms
- Strike Price: The price at which the stock will be bought/sold if the option is exercised
- Premium: The payment you receive for selling the option
- Break-even Point: Strike price plus premium (for the option buyer)

## Risk and Reward Profiles

### Covered Calls
Maximum Profit:
- Premium received
- Stock appreciation up to strike price
- Dividend payments

Maximum Loss:
- Stock declining to zero
- Offset partially by premium received

### Covered Puts
Maximum Profit:
- Premium received
- Interest on cash collateral

Maximum Loss:
- Strike price minus stock price (if stock falls below strike)
- Offset partially by premium received

## Managing Positions

### When to Buy Back Options
1. When the option has lost most of its value (80-90%)
   - Lock in profit
   - Free up shares for new covered calls

2. When the stock drops significantly
   - Buy back cheap option
   - Sell new option at lower strike price
   - Collect additional premium

3. When stock rises near strike price
   - If you want to keep shares
   - Accept loss on option to prevent shares being called away

### Rolling Options Forward
Rolling involves:
4. Buying back current option
5. Selling new option with later expiration
- Often used to avoid having shares called away
- Can sometimes be done for a net credit (receiving more premium)

## Common Scenarios and Outcomes

### Stock Price Decreases
- Option becomes less valuable
- Can buy back cheap and sell new option at lower strike
- Still face loss on stock position
- Premium provides small downside protection

### Stock Price Increases
Below Strike:
- Keep shares and premium
- Can sell new call when current expires

Above Strike:
- Shares likely called away
- Profit = Strike price - purchase price + premium

### Example Calculations
For a stock purchased at $100:
- Sell $105 call for $2 premium
- Stock rises to $110
  * Gain from shares: $5 ($105 - $100)
  * Premium: $2
  * Total profit: $7
  * Miss additional $5 gain above strike

## Risk Management Tips

6. Choose strike prices above your cost basis when possible

7. Consider ex-dividend dates when selecting expiration dates

8. Monitor positions as expiration approaches
   - Decide whether to roll or let expire
   - Plan for possible assignment

9. Use limit orders rather than market orders
   - Better price control
   - Avoid wide bid-ask spreads

10. Calculate total return including:
   - Option premium
   - Potential stock appreciation
   - Dividend payments
   - Interest on cash (for puts)

## Warning Flags and Platform Display

- Platforms may show unlimited risk warnings for covered calls
- These warnings look at option sale in isolation
- True risk is limited when you own underlying shares

## Position Monitoring Metrics

- Last Price Change: How much option price has changed
- Today's Gain/Loss: Your profit/loss based on option price movement
- Current Value: Cost to buy back option (shown as negative when short)

Remember: These metrics show option position only, not combined stock position

## Best Practices

11. Track ex-dividend dates relative to option expiration

12. Calculate potential returns before entering position:
   - Premium yield
   - Dividend yield
   - Potential appreciation

13. Have a plan for different scenarios:
   - Stock below strike
   - Stock near strike
   - Stock above strike

14. Monitor both stock and option positions together

15. Keep detailed records of:
   - Initial premium received
   - Strike prices and expiration dates
   - Rolling costs/credits
   - Total income generated