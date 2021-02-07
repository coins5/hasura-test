export const UPSERT_CHECKOUT = `mutation save_checkout ($body: TestTable_insert_input!) {
  insert_TestTable_one(
    object:$body,
    on_conflict: {
      constraint:TestTable_pkey,
      update_columns: [body, update_identifier]
    }
  ) {
    updated_at
  }
}`