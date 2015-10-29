class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.string :user
      t.string :password

      t.timestamps null: false
    end
  end
end
