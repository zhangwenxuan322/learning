import json

if __name__ == '__main__':
    with open('data/512170_week.json', 'r') as f:
        etf_week = json.load(f)
        sorted_etf = sorted(etf_week, key=lambda x: x['date'], reverse=True)
    
    with open('data/512170_week_sorted.json', 'w') as f:
        f.write(json.dumps(sorted_etf))