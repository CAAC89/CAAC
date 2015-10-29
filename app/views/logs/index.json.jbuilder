json.array!(@logs) do |log|
  json.extract! log, :id, :user, :password
  json.url log_url(log, format: :json)
end
