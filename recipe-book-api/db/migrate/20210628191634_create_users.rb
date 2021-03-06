class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users, id: :uuid do |t|
      t.string :username
      t.string :password_digest
      t.string :email

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
