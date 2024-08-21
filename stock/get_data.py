import requests
import os.path
import json
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
token = os.environ.get('TOKEN')


def get_stock_exchange():
    # get stock exchange data
    url = 'https://tsanghi.com/api/fin/stock/exchange?token=' + token
    data = requests.get(url).json()
    if data['code'] != 200:
        return None
    return json.dumps(data['data'])

def get_etf_info(exchange_code, freq, ticker):
    # get etf info
    url = f'https://tsanghi.com/api/fin/etf/{exchange_code}/{freq}?token={token}&ticker={ticker}'
    data = requests.get(url).json()
    if data['code'] != 200:
        return None
    return json.dumps(data['data'])


def save_data_to_file(data, filename):
    with open(filename, 'w') as f:
        f.write(data)

def get_exchange_info_save():
    stock_exchange_data = get_stock_exchange()
    stock_exchange_path = os.path.join(
        os.path.dirname(__file__), 'data', 'stock_exchange.json')
    save_data_to_file(str(stock_exchange_data), stock_exchange_path)

if __name__ == '__main__':
    # 512170 医疗EFT
    # XSHG（上交所）、XSHE（深交所）
    etf_code = '512170'
    etf_week = get_etf_info('XSHG', 'weekly', etf_code)
    etf_week_path = os.path.join(
        os.path.dirname(__file__), 'data', f'{etf_code}_week.json')
    save_data_to_file(str(etf_week), etf_week_path)
