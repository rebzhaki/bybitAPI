export interface Order {
  order_id: string;
  user_id: number;
  symbol: string;
  side: string;
  order_type: string;
  price?: number;
  qty: number;
  time_in_force?: string;
  order_status?: string;
  last_exec_price?: number;
  cum_exec_qty?: number;
  cum_exec_value?: number;
  cum_exec_fee?: number;
  reduce_only: boolean;
  close_on_trigger?: boolean;
  order_link_id?: string;
  created_time?: string;
  updated_time?: string;
  take_profit?: number;
  stop_loss?: number;
  tp_trigger_by?: string;
  sl_trigger_by?: string;
  //  position_idx?: number;
}
